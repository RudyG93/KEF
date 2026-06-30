"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { site } from "@/lib/site";

/**
 * Carte interactive de la zone d'intervention (OpenStreetMap via Leaflet).
 * Affiche le cercle des ~30 km autour de Rivesaltes. Gratuit, sans clé API.
 * Leaflet est importé dynamiquement (accès `window`) côté client uniquement.
 */
export function ServiceMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("leaflet").Map | undefined;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !ref.current) return;

      const center: [number, number] = [site.geo.latitude, site.geo.longitude];

      map = L.map(ref.current, {
        center,
        zoom: 10,
        scrollWheelZoom: false,
        keyboard: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap",
        maxZoom: 18,
      }).addTo(map);

      const circle = L.circle(center, {
        radius: site.serviceRadiusKm * 1000,
        color: "#ff6a00",
        weight: 2,
        fillColor: "#ff6a00",
        fillOpacity: 0.12,
      }).addTo(map);

      L.circleMarker(center, {
        radius: 7,
        color: "#ffffff",
        weight: 2,
        fillColor: "#ff6a00",
        fillOpacity: 1,
      })
        .addTo(map)
        .bindTooltip(`${site.locality} — zone d'intervention`, {
          direction: "top",
        });

      map.fitBounds(circle.getBounds(), { padding: [16, 16] });
      // Sécurité : recalcule la taille une fois le conteneur dimensionné.
      setTimeout(() => map?.invalidateSize(), 0);
    });

    return () => {
      cancelled = true;
      map?.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="map"
      role="img"
      aria-label={`Carte de la zone d'intervention : environ ${site.serviceRadiusKm} km autour de ${site.locality}`}
    />
  );
}
