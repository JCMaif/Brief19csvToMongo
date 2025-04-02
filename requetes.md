# Requetes

## Liaison entre les collections airports et flights

Aggregation:

``` sh

db.airport.aggregate([{
    $lookup: {
        from: "airport",
        localField: "APT",
        foreignField: "APT",
        as: "result"
}, {
    $unwind: "$result"
}, {
    $set: {
        "APT": "$result.APT"}
}, {
    $project: {
        "APT": true,
        "APT_ZON": true,
        "APT_PEQ": true,
        "PAX_arr": true,
        "PAX_dep": true,
        "PAX_tr": true,
        "PAX_mxt": true
        }
}, {
    $merge: {
        into: "airport",
        on: "APT",
        whenMatched: "merge",
        whenNotMatched: "insert"
        }
}
}
])
```

## 1. Compter le nombre total d'aéroports

Avec une aggregation : 

```sh
[
  {
    '$count': 'APT'
  }
]
```
Résultat :
```sh
145
```

## 2. Lister tous les aéroports d'Outre Mer

Avec une requête simple :

```sh
{ APT_ZON: "OM" }
```

Résultat :

<details>

```json
[{
  "APT": "FMCZ",
  "APT_NOM": "MAYOTTE-MARCEL HENRY",
  "APT_ZON": "OM",
  "APT_PEQ": 48337
},
{
  "APT": "FMEE",
  "APT_NOM": "LA REUNION-ROLAND GARROS",
  "APT_ZON": "OM",
  "APT_PEQ": 315566
},
{
  "APT": "LFVP",
  "APT_NOM": "ST-PIERRE-POINTE BLANCHE",
  "APT_ZON": "OM",
  "APT_PEQ": 2370
},
{
  "APT": "NLWW",
  "APT_NOM": "WALLIS-HIHIFO",
  "APT_ZON": "OM",
  "APT_PEQ": 1097
},
{
  "APT": "NTAA",
  "APT_NOM": "TAHITI FAA'A",
  "APT_ZON": "OM",
  "APT_PEQ": 161573
},
{
  "APT": "NTAT",
  "APT_NOM": "TUBUAI MATAURA",
  "APT_ZON": "OM",
  "APT_PEQ": 2772
},
{
  "APT": "NTGI",
  "APT_NOM": "MANIHI",
  "APT_ZON": "OM",
  "APT_PEQ": 1267
},
{
  "APT": "NTMD",
  "APT_NOM": "NUKU HIVA",
  "APT_ZON": "OM",
  "APT_PEQ": 7504
},
{
  "APT": "NTTB",
  "APT_NOM": "BORA BORA",
  "APT_ZON": "OM",
  "APT_PEQ": 28669
},
{
  "APT": "NTTG",
  "APT_NOM": "RANGIROA",
  "APT_ZON": "OM",
  "APT_PEQ": 10021
},
{
  "APT": "NTTH",
  "APT_NOM": "HUAHINE",
  "APT_ZON": "OM",
  "APT_PEQ": 12654
},
{
  "APT": "NTTM",
  "APT_NOM": "MOOREA",
  "APT_ZON": "OM",
  "APT_PEQ": 3256
},
{
  "APT": "NTTP",
  "APT_NOM": "MAUPITI",
  "APT_ZON": "OM",
  "APT_PEQ": 2782
},
{
  "APT": "NTTR",
  "APT_NOM": "RAIATEA",
  "APT_ZON": "OM",
  "APT_PEQ": 25045
},
{
  "APT": "NWWE",
  "APT_NOM": "ILE DES PINS",
  "APT_ZON": "OM",
  "APT_PEQ": 10522
},
{
  "APT": "NWWL",
  "APT_NOM": "LIFOU",
  "APT_ZON": "OM",
  "APT_PEQ": 15464
},
{
  "APT": "NWWM",
  "APT_NOM": "NOUMEA MAGENTA",
  "APT_ZON": "OM",
  "APT_PEQ": 42709
},
{
  "APT": "NWWR",
  "APT_NOM": "MARE",
  "APT_ZON": "OM",
  "APT_PEQ": 8164
},
{
  "APT": "NWWV",
  "APT_NOM": "OUVEA",
  "APT_ZON": "OM",
  "APT_PEQ": 8499
},
{
  "APT": "NWWW",
  "APT_NOM": "NOUMEA LA TONTOUTA",
  "APT_ZON": "OM",
  "APT_PEQ": 54809
},
{
  "APT": "SOCA",
  "APT_NOM": "CAYENNE-FELIX EBOUE",
  "APT_ZON": "OM",
  "APT_PEQ": 46245
},
{
  "APT": "SOOG",
  "APT_NOM": "ST-GEORGES-DE-L'OYAPOCK",
  "APT_ZON": "OM",
  "APT_PEQ": 1098
},
{
  "APT": "TFFF",
  "APT_NOM": "MARTINIQUE-AIME CESAIRE",
  "APT_ZON": "OM",
  "APT_PEQ": 191830
},
{
  "APT": "TFFG",
  "APT_NOM": "ST-MARTIN-GRAND-CASE",
  "APT_ZON": "OM",
  "APT_PEQ": 14663
},
{
  "APT": "TFFJ",
  "APT_NOM": "ST-BARTHELEMY",
  "APT_ZON": "OM",
  "APT_PEQ": 19933
},
{
  "APT": "TFFM",
  "APT_NOM": "MARIE-GALANTE",
  "APT_ZON": "OM",
  "APT_PEQ": 1028
},
{
  "APT": "TFFR",
  "APT_NOM": "POINTE-A-PITRE-LE RAIZET",
  "APT_ZON": "OM",
  "APT_PEQ": 209082
},
{
  "APT": "ZZOM",
  "APT_NOM": " AUTRES APT (OM)",
  "APT_ZON": "OM",
  "APT_PEQ": 12127
},
{
  "APT": "NTTE",
  "APT_NOM": "TETIAROA",
  "APT_ZON": "OM",
  "APT_PEQ": 1057
},
{
  "APT": "LFVM",
  "APT_NOM": "MIQUELON",
  "APT_ZON": "OM",
  "APT_PEQ": 1348
},
{
  "APT": "NTAR",
  "APT_NOM": "RURUTU",
  "APT_ZON": "OM",
  "APT_PEQ": 3155
},
{
  "APT": "NTTO",
  "APT_NOM": "HAO",
  "APT_ZON": "OM",
  "APT_PEQ": 1757
},
{
  "APT": "TFFS",
  "APT_NOM": "LES SAINTES-TERRE-DE-HAUT",
  "APT_ZON": "OM",
  "APT_PEQ": 1190
},
{
  "APT": "SOOA",
  "APT_NOM": "MARIPASOULA",
  "APT_ZON": "OM",
  "APT_PEQ": 1702
},
{
  "APT": "NTGC",
  "APT_NOM": "TIKEHAU",
  "APT_ZON": "OM",
  "APT_PEQ": 3100
},
{
  "APT": "NTGT",
  "APT_NOM": "TAKAPOTO",
  "APT_ZON": "OM",
  "APT_PEQ": 1326
},
{
  "APT": "NTMN",
  "APT_NOM": "HIVA OA-ATUONA",
  "APT_ZON": "OM",
  "APT_PEQ": 3464
},
{
  "APT": "NWWU",
  "APT_NOM": "TOUHO",
  "APT_ZON": "OM",
  "APT_PEQ": 1033
},
{
  "APT": "NTGM",
  "APT_NOM": "MAKEMO",
  "APT_ZON": "OM",
  "APT_PEQ": 1010
},
{
  "APT": "NTGF",
  "APT_NOM": "FAKARAVA",
  "APT_ZON": "OM",
  "APT_PEQ": 3280
},
{
  "APT": "NTTX",
  "APT_NOM": "MURUROA",
  "APT_ZON": "OM",
  "APT_PEQ": 1073
},
{
  "APT": "NLWF",
  "APT_NOM": "FUTUNA",
  "APT_ZON": "OM",
  "APT_PEQ": 1097
},
{
  "APT": "FMEP",
  "APT_NOM": "ST-PIERRE-PIERREFONDS",
  "APT_ZON": "OM",
  "APT_PEQ": 1915
},
{
  "APT": "NTGG",
  "APT_NOM": "NENGO",
  "APT_ZON": "OM",
  "APT_PEQ": 1023
},
{
  "APT": "NTKR",
  "APT_NOM": "TAKAROA",
  "APT_ZON": "OM",
  "APT_PEQ": 1008
},
{
  "APT": "SOOS",
  "APT_NOM": "SAUL",
  "APT_ZON": "OM",
  "APT_PEQ": 1126
},
{
  "APT": "NTHE",
  "APT_NOM": "AHE",
  "APT_ZON": "OM",
  "APT_PEQ": 1128
},
{
  "APT": "NTUV",
  "APT_NOM": "VAHITAHI",
  "APT_ZON": "OM",
  "APT_PEQ": 1053
},
{
  "APT": "NTGU",
  "APT_NOM": "ARUTUA",
  "APT_ZON": "OM",
  "APT_PEQ": 1360
},
{
  "APT": "NTGV",
  "APT_NOM": "MATAIVA",
  "APT_ZON": "OM",
  "APT_PEQ": 1050
},
{
  "APT": "NTAV",
  "APT_NOM": "RAIVAVAE",
  "APT_ZON": "OM",
  "APT_PEQ": 1033
},
{
  "APT": "NTMP",
  "APT_NOM": "UA POU",
  "APT_ZON": "OM",
  "APT_PEQ": 1034
},
{
  "APT": "NTAM",
  "APT_NOM": "RIMATARA",
  "APT_ZON": "OM",
  "APT_PEQ": 1118
},
{
  "APT": "NTGJ",
  "APT_NOM": "TOTEGEGIE",
  "APT_ZON": "OM",
  "APT_PEQ": 1101
},
{
  "APT": "NWWD",
  "APT_NOM": "KONE",
  "APT_ZON": "OM",
  "APT_PEQ": 1021
}]
```

</details>

## 4 Calculer le nombre total de mouvements (NMVT_mixte + NMVT_cargo) par mois pour 2012

Avec une aggrégation : 
1. match : pour filtrer sur 2012
2. group : pour grouper les résultats par mois
3. sum : pour additionner les résultats
4. add : pour additionner les champs

```js
db.getCollection('flights').aggregate(
  [
    { $match: { AN: 2012 } },
    {
      $group: {
        _id: '$MOIS',
        totalNMVT: {
          $sum: {
            $add: ['$NMVT_Mixte', '$NMVT_Cargo']
          }
        }
      }
    }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);
```

Résultats :

<details>

```json
[{
  "_id": 5,
  "totalNMVT": 167003
},
{
  "_id": 7,
  "totalNMVT": 180485
},
{
  "_id": 1,
  "totalNMVT": 143083
},
{
  "_id": 3,
  "totalNMVT": 156879
},
{
  "_id": 8,
  "totalNMVT": 169007
},
{
  "_id": 2,
  "totalNMVT": 137487
},
{
  "_id": 6,
  "totalNMVT": 171311
},
{
  "_id": 4,
  "totalNMVT": 156404
},
{
  "_id": 9,
  "totalNMVT": 167169
},
{
  "_id": 10,
  "totalNMVT": 161945
},
{
  "_id": 12,
  "totalNMVT": 141882
},
{
  "_id": 11,
  "totalNMVT": 141829
}]
```

</details>

## 5 Trouver les 5 aéroports ayant eu le plus de passagers au départ

``` sh

[
  {
    $group: {
      '_id': '$APT',
      'passager': {
        '$sum': '$PAX_Depart'
      }
    }
  }, {
    $sort: {
      'passager': -1
    }
  }, {
    $limit: 5
  }
]
```

Résultats

<details>

```json
[{
  "_id": "LFPG",
  "passager": 829333064
},
{
  "_id": "LFPO",
  "passager": 440858208
},
{
  "_id": "LFMN",
  "passager": 159783642
},
{
  "_id": "LFLL",
  "passager": 113762130
},
{
  "_id": "LFML",
  "passager": 110545802
}]
```
</details>

## 6 Calculer la moyenne mensuelle de fret pour chaque zone

Aggregate : 

```sh
[
  {
    '$lookup': {
      'from': 'airports', 
      'localField': 'APT', 
      'foreignField': 'APT', 
      'as': 'airports'
    }
  }, {
    '$addFields': {
      'ZONE': {
        '$arrayElemAt': [
          '$airports.APT_ZON', 0
        ]
      }
    }
  }, {
    '$addFields': {
      'totalFret': {
        '$add': [
          '$FRP_Arrivee', '$FRP_Depart'
        ]
      }
    }
  }, {
    '$group': {
      '_id': {
        'MOIS': '$MOIS', 
        'APT_ZONE': '$ZONE'
      }, 
      'fretTotalMensuel': {
        '$sum': '$totalFret'
      }, 
      'nbRecords': {
        '$count': {}
      }
    }
  }, {
    '$addFields': {
      'fretMoyenMensuel': {
        '$divide': [
          '$fretTotalMensuel', '$nbRecords'
        ]
      }
    }
  }, {
    '$sort': {
      '_id.ZONE': 1, 
      '_id.MOIS': 1
    }
  }
]
```

Résultats : 

<details>

```json
[{
  "_id": {
    "MOIS": 1,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 223178,
  "nbRecords": 1176,
  "fretMoyenMensuel": 189.77721088435374
},
{
  "_id": {
    "MOIS": 1,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 5676156,
  "nbRecords": 1897,
  "fretMoyenMensuel": 2992.175013178703
},
{
  "_id": {
    "MOIS": 2,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 5663730,
  "nbRecords": 1910,
  "fretMoyenMensuel": 2965.303664921466
},
{
  "_id": {
    "MOIS": 2,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 234034,
  "nbRecords": 1061,
  "fretMoyenMensuel": 220.57869934024504
},
{
  "_id": {
    "MOIS": 3,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 6549349,
  "nbRecords": 1960,
  "fretMoyenMensuel": 3341.5045918367346
},
{
  "_id": {
    "MOIS": 3,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 289236,
  "nbRecords": 1144,
  "fretMoyenMensuel": 252.82867132867133
},
{
  "_id": {
    "MOIS": 4,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 5967513,
  "nbRecords": 1948,
  "fretMoyenMensuel": 3063.4050308008214
},
{
  "_id": {
    "MOIS": 4,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 282041,
  "nbRecords": 1128,
  "fretMoyenMensuel": 250.0363475177305
},
{
  "_id": {
    "MOIS": 5,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 241199,
  "nbRecords": 1086,
  "fretMoyenMensuel": 222.0985267034991
},
{
  "_id": {
    "MOIS": 5,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 5958427,
  "nbRecords": 1959,
  "fretMoyenMensuel": 3041.565594691169
},
{
  "_id": {
    "MOIS": 6,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 6092983,
  "nbRecords": 2013,
  "fretMoyenMensuel": 3026.817188276205
},
{
  "_id": {
    "MOIS": 6,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 231894,
  "nbRecords": 1116,
  "fretMoyenMensuel": 207.79032258064515
},
{
  "_id": {
    "MOIS": 7,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 244595,
  "nbRecords": 1186,
  "fretMoyenMensuel": 206.23524451939292
},
{
  "_id": {
    "MOIS": 7,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 6150890,
  "nbRecords": 1968,
  "fretMoyenMensuel": 3125.4522357723577
},
{
  "_id": {
    "MOIS": 8,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 5697947,
  "nbRecords": 1847,
  "fretMoyenMensuel": 3084.9740119112075
},
{
  "_id": {
    "MOIS": 8,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 234937,
  "nbRecords": 1221,
  "fretMoyenMensuel": 192.4135954135954
},
{
  "_id": {
    "MOIS": 9,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 6155001,
  "nbRecords": 1975,
  "fretMoyenMensuel": 3116.4562025316454
},
{
  "_id": {
    "MOIS": 9,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 229354,
  "nbRecords": 1086,
  "fretMoyenMensuel": 211.1915285451197
},
{
  "_id": {
    "MOIS": 10,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 251003,
  "nbRecords": 1126,
  "fretMoyenMensuel": 222.91563055062167
},
{
  "_id": {
    "MOIS": 10,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 6579111,
  "nbRecords": 1960,
  "fretMoyenMensuel": 3356.6892857142857
},
{
  "_id": {
    "MOIS": 11,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 250478,
  "nbRecords": 1092,
  "fretMoyenMensuel": 229.37545787545787
},
{
  "_id": {
    "MOIS": 11,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 6454490,
  "nbRecords": 1879,
  "fretMoyenMensuel": 3435.066524747206
},
{
  "_id": {
    "MOIS": 12,
    "APT_ZONE": "OM"
  },
  "fretTotalMensuel": 331261,
  "nbRecords": 1215,
  "fretMoyenMensuel": 272.6427983539095
},
{
  "_id": {
    "MOIS": 12,
    "APT_ZONE": "MT"
  },
  "fretTotalMensuel": 6525348,
  "nbRecords": 1891,
  "fretMoyenMensuel": 3450.7392913802223
}]
```

</details>
