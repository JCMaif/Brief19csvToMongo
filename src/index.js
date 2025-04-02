import { promises as fs } from "fs";
import { parse } from "csv-parse/sync";
import {glob} from "glob";
import path from "path";

async function processAndExportData() {
    try {
        // Étape 1 : Récupérer la liste des fichiers CSV
        const directoryPath = './src/data'; 
        const files = (await fs.readdir(directoryPath)).filter(file => file.endsWith(".csv"));
        console.log("Fichiers trouvés :", files);

        const airports = new Map(); 
        const flights = [];

        // Étape 2 : Lire chaque fichier et traiter les colonnes
        for (const file of files) {
            const filePath = path.join(directoryPath, file);
            const content = await fs.readFile(filePath, 'utf8');
            const records = parse(content, { columns: true, skip_empty_lines: true, delimiter: ";" });
            const ANMOIS = Object.keys(records[0])[0];
            // Filtrer les colonnes pour les aéroports et les vols
            for (const record of records) {
                // Aéroports
                airports.set(record.APT, {
                    APT: record.APT,
                    APT_NOM: record.APT_NOM,
                    APT_ZONE: record.APT_ZON,
                    APT_PEQ: record.APT_PEQ
                })

                // Vols
                const AN = record[ANMOIS].slice(0,4);
                const MOIS = record[ANMOIS].slice(4,6);
                flights.push({
                    AN: AN,
                    MOIS: MOIS,
                    PAX_Depart: record.APT_PAX_dep,
                    PAX_Arrivee: record.APT_PAX_arr,
                    PAX_Transit: record.APT_PAX_tr,
                    FRP_Depart: record.APT_FRP_dep,
                    FRP_Arrivee: record.APT_FRP_arr,
                    NMVT_Mixte: record.APT_NMVT_mxt,
                    NMVT_Cargo: record.APT_NMVT_cgo,
                });
            }
        }

        // Étape 3 : Exporter les données dans des fichiers CSV
        const airportFilePath = './src/airport.csv'; 
        const flightFilePath = './src/flights.csv'; 

        // Exporter les aéroports
        const airportCsvContent = [
            "APT;APT_NOM;APT_ZONE;APT_PEQ", // Entête
            ...Array.from(airports.values()).map(airport =>
                `${airport.APT};${airport.APT_NOM};${airport.APT_ZONE};${airport.APT_PEQ}`
            )
        ].join("\n");
        await fs.writeFile(airportFilePath, airportCsvContent, 'utf8');
        console.log(`Fichier exporté : ${airportFilePath}`);




        // Exporter les vols
        const flightCsvContent = [
            "AN;MOIS;PAX_Depart;PAX_Arrivee;PAX_Transit;FRP_Depart;FRP_Arrivee;NMVT_Mixte;NMVT_Cargo" // Entête
        ].concat(
            flights.map(flight =>
                `${flight.AN};${flight.MOIS};${flight.PAX_Depart};${flight.PAX_Arrivee};${flight.PAX_Transit};${flight.FRP_Depart};${flight.FRP_Arrivee};${flight.NMVT_Mixte};${flight.NMVT_Cargo}`
            )
        ).join("\n");
        await fs.writeFile(flightFilePath, flightCsvContent, 'utf8');
        console.log(`Fichier exporté : ${flightFilePath}`);

        
    } catch (error) {
        console.error("Erreur lors du traitement des fichiers :", error.message);
    }
}

processAndExportData();





// async function main() {
//     console.log("Recherche de fichiers dans '../entrants/data/*.csv'...");
//     const files = glob.sync('../entrants/data/*.csv'); 

//     console.log("Fichiers trouvés :", files);

//     if (files.length === 0) {
//         console.warn("Aucun fichier trouvé. Vérifiez le chemin ou la présence des fichiers.");
//         return;
//     }

//     for (const file of files) {
//         try {
//             const content = await fs.readFile(file, 'utf8'); 
//             const records = parse(content, { columns: true, skip_empty_lines: true, delimiter: ";" }); 
            
//             console.log(`Fichier: ${file}`, records); 
//         } catch (error) {
//             console.error(`Erreur lors du traitement du fichier ${file} :`, error.message);
//         }
//     }
// }

// main();