# Trafic aérien français

Analyse du fichier de données de trafic aérien français de 1990 à 2023

## Structure des données

Les fichiers contiennent les statistiques mensuelles de trafic aérien pour tous les aéroports français de 1990 à 2023, avec les champs suivants :

---

ANMOIS : Année et mois au format AAAAMM (ex: 199001 pour janvier 1990)

APT : Code OACI de l'aéroport (ex: LFPG pour Paris CDG)

APT_NOM : Nom complet de l'aéroport

APT_ZON : Zone géographique

MT : Métropole

OM : Outre-Mer

APT_PEQ : Unités de trafic (1 UDT = 1000 passagers ou 0.1 tonne de fret/poste)

---

Passagers :

- APT_PAX_dep : Passagers au départ
- APT_PAX_arr : Passagers à l'arrivée
- APT_PAX_tr : Passagers en transit

---

Fret (en tonnes) :

- APT_FRP_dep : Fret et poste au départ
- APT_FRP_arr : Fret et poste à l'arrivée

---

Mouvements d'avions :

- APT_NMVT_mxt : Vols mixtes (passagers + fret)
- APT_NMVT_cgo : Vols cargo uniquement

---

Points notables

Les données couvrent tous les aéroports ayant un trafic supérieur à 1000 passagers ou 100kg de fret par mois

Infos supplémentaires :
- ZZMT pour la métropole
- ZZOM pour l'outre-mer