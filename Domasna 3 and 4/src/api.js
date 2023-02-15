const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/data', (req, res) => {
  res.json([
    {
        "type": "FeatureCollection",
        "generator": "overpass-ide",
        "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
        "timestamp": "2022-12-25T18:00:05Z",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "@id": "node/380920212",
              "amenity": "hospital",
              "name": "ЈЗУ Општа Болница",
              "name:en": "Jzu Opsta Bolnica"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.0202441,
                41.4439681
              ]
            },
            "id": "node/380920212"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/381141682",
              "amenity": "hospital",
              "name": "Itna medicinska sluzba",
              "opening_hours": "24/7"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.018682,
                41.4331879
              ]
            },
            "id": "node/381141682"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/390436187",
              "addr:city": "Охрид",
              "addr:postcode": "6000",
              "addr:street": "Димитар Влахов",
              "amenity": "hospital",
              "emergency": "yes",
              "name": "Брза помош-амбуланта"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                20.8069305,
                41.1128747
              ]
            },
            "id": "node/390436187"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/446285567",
              "amenity": "hospital",
              "name": "Систина"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.391876,
                41.9988883
              ]
            },
            "id": "node/446285567"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/478041008",
              "amenity": "hospital",
              "name": "Asklepij"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.0143343,
                41.4334419
              ]
            },
            "id": "node/478041008"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/479803481",
              "amenity": "hospital",
              "name": "Eye Center VIZIA"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.3825263,
                42.006422
              ]
            },
            "id": "node/479803481"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/552740011",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4252136,
                42.0374713
              ]
            },
            "id": "node/552740011"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/774784615",
              "amenity": "hospital",
              "name": "Здравствен дом Ресен",
              "name:mk": "Здравствен дом Ресен"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.0073455,
                41.0899619
              ]
            },
            "id": "node/774784615"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1088079165",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.3340659,
                41.8845005
              ]
            },
            "id": "node/1088079165"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1092272137",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.338885,
                42.0080827
              ]
            },
            "id": "node/1092272137"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1092272145",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.3381661,
                42.007708
              ]
            },
            "id": "node/1092272145"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1092272150",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.3394643,
                42.0087603
              ]
            },
            "id": "node/1092272150"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1092300445",
              "amenity": "hospital",
              "is_in": "Volkovo"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.3467492,
                42.0481616
              ]
            },
            "id": "node/1092300445"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1272903523",
              "amenity": "hospital",
              "name": "Bolnica Vinica"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.510037,
                41.8872494
              ]
            },
            "id": "node/1272903523"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1381604857",
              "amenity": "hospital",
              "name": "Болница за зависности"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.442001,
                41.9703449
              ]
            },
            "id": "node/1381604857"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1381606894",
              "amenity": "hospital",
              "name": "Адриалаб"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4346369,
                41.986937
              ]
            },
            "id": "node/1381606894"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1747627317",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4331367,
                41.986065
              ]
            },
            "id": "node/1747627317"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1850511011",
              "amenity": "hospital",
              "healthcare": "hospital",
              "name": "Манолеви"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4501059,
                42.0601589
              ]
            },
            "id": "node/1850511011"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1972933169",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.0052937,
                41.0405263
              ]
            },
            "id": "node/1972933169"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/1999950864",
              "amenity": "hospital",
              "emergency": "yes",
              "healthcare": "hospital",
              "name": "Ambulanta"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.2415389,
                41.408624
              ]
            },
            "id": "node/1999950864"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2323196789",
              "amenity": "hospital",
              "healthcare": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.5066705,
                41.1450708
              ]
            },
            "id": "node/2323196789"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2411245246",
              "addr:postcode": "1480",
              "amenity": "hospital",
              "email": "info@negorskibanji.com.mk",
              "internet_access": "wlan",
              "name": "Негорски Бањи",
              "name:en": "Negorski Spa",
              "name:mk": "Негорски Бањи",
              "opening_hours": "24/7",
              "phone": "0038934231174",
              "website": "http://www.negorskibanji.com.mk"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.4907252,
                41.1717857
              ]
            },
            "id": "node/2411245246"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2574157872",
              "addr:city": "Valandovo",
              "amenity": "hospital",
              "emergency": "yes",
              "name": "JZU Zdravstven dom Valandovo"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.5564969,
                41.3156008
              ]
            },
            "id": "node/2574157872"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2891532999",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.5899086,
                42.0191328
              ]
            },
            "id": "node/2891532999"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/2893230087",
              "amenity": "hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4559663,
                41.0422922
              ]
            },
            "id": "node/2893230087"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/3162774861",
              "amenity": "hospital",
              "wheelchair": "yes"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.465501,
                41.635965
              ]
            },
            "id": "node/3162774861"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/3647042375",
              "amenity": "hospital",
              "name": "Poliklinika \"Goce Delcev\""
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.7343791,
                42.1197425
              ]
            },
            "id": "node/3647042375"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4125379517",
              "addr:city": "Cкoпje",
              "addr:postcode": "1000",
              "addr:street": "Булевар Партизански Одреди",
              "amenity": "hospital",
              "name": "Центар за ментално здравје",
              "name:en": "Center for mental health",
              "operator": "Министерство за здравство"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4128098,
                42.0009982
              ]
            },
            "id": "node/4125379517"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4125379518",
              "addr:city": "Cкoпje",
              "addr:postcode": "1000",
              "addr:street": "Булевар Партизански Одреди",
              "amenity": "hospital",
              "name": "ПЗУ „Д-р Горица“",
              "name:en": "PZU \"D-r Gorica\""
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4130411,
                42.0010726
              ]
            },
            "id": "node/4125379518"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4138200603",
              "amenity": "hospital",
              "name": "Неуромедика",
              "name:en": "Neuromedika"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4145316,
                42.0005964
              ]
            },
            "id": "node/4138200603"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4247656089",
              "addr:postcode": "1238",
              "amenity": "hospital",
              "name": "Hospital"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                20.8824258,
                41.8353984
              ]
            },
            "id": "node/4247656089"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4281387289",
              "addr:street": "alija avdovikj 3/2-1",
              "amenity": "hospital",
              "internet_access": "wlan",
              "name": "Medical Point",
              "opening_hours": "Mo-Su 08:00-22:00",
              "phone": "+38970911013"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.5118538,
                42.0160266
              ]
            },
            "id": "node/4281387289"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4502450989",
              "addr:postcode": "1221",
              "addr:street": "101",
              "amenity": "hospital",
              "name": "Bolnica Kamenjane",
              "name:en": "Hospital Kamenjane",
              "name:mk": "Bolnica Kamenjane",
              "name:sq": "Spitali Kamjan"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                20.9253281,
                41.9441196
              ]
            },
            "id": "node/4502450989"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4512189989",
              "addr:housenumber": "10",
              "addr:postcode": "1000",
              "addr:street": "Skupi22",
              "amenity": "hospital",
              "email": "medikacentar@yahoo.com",
              "internet_access": "wlan",
              "name": "Медика Центар",
              "name:en": "Medica Centar",
              "name:mk": "Медика Центар",
              "opening_hours": "24/7",
              "phone": "+38970206097"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.3825697,
                42.0179859
              ]
            },
            "id": "node/4512189989"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4776265422",
              "amenity": "hospital",
              "name": "ЈЗУ ЗДРАВСТВЕН ДОМ"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4407164,
                42.0035328
              ]
            },
            "id": "node/4776265422"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/4885047822",
              "addr:housenumber": "1-1/3",
              "addr:postcode": "1200",
              "addr:street": "Видое Смилевски Бато",
              "amenity": "hospital",
              "emergency": "yes",
              "healthcare": "hospital",
              "healthcare:speciality": "general",
              "name": "ONE Hospital - Tetovo",
              "name:en": "ONE Hospital - Tetovo",
              "name:mk": "ОНЕ Хоспитал - Тетово",
              "name:sq": "ONE Hospital - Tetovë",
              "opening_hours": "Mo-Sa 00:00-00:00",
              "phone": "+38978822777",
              "website": "http://www.onehospital.mk/"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                20.9773702,
                42.0030792
              ]
            },
            "id": "node/4885047822"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/5130474890",
              "amenity": "hospital",
              "name": "Здравствен дом „Железничар“",
              "name:en": "Železničar Health Centre"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4271939,
                41.9933702
              ]
            },
            "id": "node/5130474890"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/5600176621",
              "amenity": "hospital",
              "name:en": "bioenergy"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4333393,
                42.0319727
              ]
            },
            "id": "node/5600176621"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/5601794407",
              "amenity": "hospital",
              "name": "Euroitalia"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.6155055,
                41.9389005
              ]
            },
            "id": "node/5601794407"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/5646430122",
              "addr:street": "Ќемал Ататурк",
              "amenity": "hospital",
              "name": "Visar"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4434522,
                42.0130459
              ]
            },
            "id": "node/5646430122"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/5761128321",
              "amenity": "hospital",
              "name": "Др.Пашковски",
              "name:en": "Dr.Paskovski"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.0130865,
                41.0855049
              ]
            },
            "id": "node/5761128321"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/5969332187",
              "addr:postcode": "6000",
              "addr:street": "R1208, ohrid",
              "amenity": "hospital",
              "internet_access": "wlan",
              "name": "St. Erasmus Hospital",
              "opening_hours": "Mo 08:00-15:30; Tu 08:00-15:30; We 08:00-15:00; Th 08:00-15:30; Fr 08:00-15:00; Sa 08:00-12:00; Su 00:00-24:00",
              "phone": "+38946272700",
              "website": "https://traortoh.com.mk/"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                20.7631403,
                41.1348192
              ]
            },
            "id": "node/5969332187"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/5999496485",
              "addr:street": "11-ти Ноември",
              "amenity": "hospital",
              "healthcare": "hospital",
              "name": "Hitna Pomos",
              "name:en": "Ambulance",
              "name:mk": "Brza Pomos"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.7104934,
                42.1369857
              ]
            },
            "id": "node/5999496485"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/6347485641",
              "amenity": "hospital",
              "healthcare": "hospital",
              "name": "Партизанска болница"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.4646543,
                41.7613575
              ]
            },
            "id": "node/6347485641"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/6384505886",
              "addr:postcode": "1230",
              "amenity": "hospital",
              "name": "Болница Ферид Мурад",
              "name:tr": "Ferid Murad Hastanesi"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                20.903526,
                41.7929628
              ]
            },
            "id": "node/6384505886"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/7027084885",
              "amenity": "hospital",
              "name": "Стоматолошка Ординација",
              "name:en": "Dentist"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.4235554,
                41.9919437
              ]
            },
            "id": "node/7027084885"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/7173141269",
              "amenity": "hospital",
              "healthcare": "hospital",
              "healthcare:speciality": "general_practice;surgery;laboratory;first_aid_training;occupational;neurosurgery",
              "name": "NATURA MEDIKA",
              "operator": "Public",
              "operator:type": "private"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.0014229,
                42.034337
              ]
            },
            "id": "node/7173141269"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/8393939617",
              "amenity": "hospital",
              "internet_access": "wlan",
              "name": "lindi 2022"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.5332026,
                41.9347627
              ]
            },
            "id": "node/8393939617"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/8434537936",
              "addr:city": "Драчево",
              "addr:housenumber": "28",
              "addr:postcode": "1000",
              "addr:street": "Димитар Гуштанов",
              "amenity": "hospital",
              "emergency": "no",
              "healthcare": "hospital",
              "healthcare:speciality": "general",
              "name": "PZU \"Deona MM\"",
              "operator": "Dr. Mira Miloseska",
              "operator:type": "private",
              "phone": "+389 2 2796-952"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                21.5158516,
                41.9398219
              ]
            },
            "id": "node/8434537936"
          },
          {
            "type": "Feature",
            "properties": {
              "@id": "node/10174200205",
              "amenity": "hospital",
              "healthcare": "hospital",
              "name": "Здравствен Дом Виница"
            },
            "geometry": {
              "type": "Point",
              "coordinates": [
                22.5105001,
                41.8880143
              ]
            },
            "id": "node/10174200205"
          }
        ]
      }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})