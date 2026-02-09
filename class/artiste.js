export class Artiste {
    static STATUT_ACTIVITE = {
        Inactif: "Inactif",
        Actif: "Actif",
        Retraite: "Retraite"
    };

    constructor(nom, prenom, dateDebut, styleMusical, actif = Artiste.STATUT_ACTIVITE.Inactif) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateDebut = dateDebut || null;
        this.styleMusical = styleMusical;
        this.actif = actif;
    }

    commencerCarriere(dateDebut) {
        if(this.actif === Artiste.STATUT_ACTIVITE.Inactif && !this.dateDebut) {
            this.actif = Artiste.STATUT_ACTIVITE.Actif;
            this.dateDebut = dateDebut;
            console.log(`${this.prenom} ${this.nom.toUpperCase()} a entammé sa carrière.`);
        } else {
            throw new Error("Cet artiste est déjà actif dans sa carrière !");
        }
    }

    prendreRetraite() {
        if(this.actif === Artiste.STATUT_ACTIVITE.Actif) {
            this.actif = Artiste.STATUT_ACTIVITE.Retraite;
            console.log(`${this.prenom} ${this.nom.toUpperCase()} part à la retraite.`);
        } else {
            throw new Error("Cet artiste est déjà retraité !");
        }
    }

    afficherInfo() {
        console.log(`
        Identité : ${this.prenom} ${this.nom.toUpperCase()},
        Début de carrière : ${this.dateDebut ? this.dateDebut.toLocaleDateString() : "[Carrière non débutée.]"},
        Style musical : ${this.styleMusical},
        Statut d'activité : ${this.actif}
        `);
    }
}