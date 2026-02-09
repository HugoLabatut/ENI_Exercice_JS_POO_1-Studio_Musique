import {Artiste} from "./artiste.js";

export class Musicien extends Artiste {

    static NIVEAU_EXPERTISE = {
        Debutant: "Debutant",
        Intermediaire: "Intermediaire",
        Expert: "Expert"
    };

    constructor(nom,
                prenom,
                dateDebut,
                styleMusical,
                actif = Artiste.STATUT_ACTIVITE.Inactif,
                instrument = [],
                niveauExpertise = Musicien.NIVEAU_EXPERTISE.Debutant) {
        super(nom, prenom, dateDebut, styleMusical);

        this.instrument = instrument;
        this.niveauExpertise = niveauExpertise;
    }


    afficherInfo() {
        super.afficherInfo();

        console.log(`
        Instruments : ${this.instrument.join(", ")},
        Niveau d'expertise : ${this.niveauExpertise}
        `);
    }
}