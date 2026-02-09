import {Artiste} from "./artiste.js";

export class Groupe {
    constructor(nomGroupe, dateFormation, genre, membres = []) {
        this.nomGroupe = nomGroupe;
        this.dateFormation = dateFormation;
        this.genre = genre;
        this.membres = membres;
    }

    ajouterMembre(artiste) {
        if(artiste instanceof Artiste) {
            if(this.membres.includes(artiste)) {
                this.membres.push(artiste);
            }
        }
    }

    listerMembres() {
        return this.membres.join(", ");
    }

    estEnActivite() {
        return this.membres.filter(this.membres.STATUT_ACTIVITE.Actif);
    }
}