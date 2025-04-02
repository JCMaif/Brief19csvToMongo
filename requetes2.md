
## Agregation
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
Question 5

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
resultat : 
```
- "LFPG"
passager
829333064
- "LFPO"
passager
440858208
- "LFMN"
passager
159783642
- "LFLL"
passager
113762130
- "LFML"
passager
110545802