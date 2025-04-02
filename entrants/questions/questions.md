# Questions sur les donnÃ©es de trafic aÃ©rien

1. **Compter le nombre total d'aÃ©roports**

2. **Lister tous les aÃ©roports d'outre-mer (APT_ZON = 'OM')**

3. **Trouver tous les vols de l'aÃ©roport de Paris Charles de Gaulle en janvier 1999**

4. **Calculer le nombre total de mouvements (APT_NMVT_mxt + APT_NMVT_cgo) par mois de l'annÃ©e 2012**

5. **Trouver les 5 aÃ©roports ayant eu le plus de passagers au dÃ©part**

6. **Calculer la moyenne mensuelle de fret pour chaque zone (MT/OM)**

7. **Pour chaque mois, comparer :**
   - **Nombre total de passagers** : MÃ©tropole vs Outre-mer
   - **Fret total** : MÃ©tropole vs Outre-mer
   - **Mouvements d'avions** : MÃ©tropole vs Outre-mer

8. **CrÃ©er une analyse annuelle du trafic :**
    - **Identifier les mois les plus chargÃ©s de chaque annÃ©e :**
      - Trouver les mois avec le plus grand nombre total de passagers, de fret, et de mouvements pour chaque annÃ©e.
    - **Calculer les variations annuelles en % :**
      - Comparer les totaux mensuels de passagers, de fret, et de mouvements entre les annÃ©es successives et calculez les variations en pourcentage.

9.  **Analyser la rÃ©partition du trafic cargo :**
    - **Pour chaque mois, dÃ©terminer le pourcentage de vols cargo parmi tous les vols (cargo et mixtes)**
    - **Identifier les 10 principaux aÃ©roports cargo :**
      - Lister les 10 aÃ©roports ayant le plus de fret (CGO) au total.
    - **Analyser l'Ã©volution mensuelle du fret**
      - Pour chaque mois, calculer le total du fret (CGO)

10. **CrÃ©er un systÃ¨me de classification des aÃ©roports :**<br>
    - **Grands hubs** : AÃ©roports avec plus de 1 million de passagers par an.<br>
    - **AÃ©roports rÃ©gionaux** : AÃ©roports avec entre 100 000 et 1 million de passagers par an.<br>
    - **Petits aÃ©roports** : AÃ©roports avec moins de 100 000 passagers par an.

11. **CrÃ©er des indicateurs de performance :**
    - **Taux de remplissage estimÃ©**: Calculer le ratio entre le nombre de passagers (PAX) et le nombre de mouvements (NMVT).
    - **EfficacitÃ© fret (tonnes/mouvement)**: Calculer le ratio entre le fret (CGO) et le nombre de mouvements (NMVT).
    - **Utilisation des infrastructures** : Nombre de mouvements par jour et par aÃ©roport.
    - **Taux de transit** : Le taux de transit est calculÃ© comme le ratio entre les passagers en transit (PAX_tr) et la somme des passagers arrivant (PAX_arr) et des passagers partant (PAX_dep).