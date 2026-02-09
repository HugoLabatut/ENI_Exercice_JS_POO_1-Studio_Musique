import {Artiste} from "./artiste.js";

export class DJ extends Artiste {

    constructor(nom,
                prenom,
                dateDebut,
                styleMusical,
                actif = Artiste.STATUT_ACTIVITE.Inactif,
                equipement = [],
                specialite) {
        super(nom, prenom, dateDebut, styleMusical);

        this.equipement = equipement;
        this.specialite = specialite;
    }


    afficherInfo() {
        super.afficherInfo();

        console.log(`
        Equipements : ${this.equipement.join(", ")},
        Specialite : ${this.specialite}
        `);
    }
}