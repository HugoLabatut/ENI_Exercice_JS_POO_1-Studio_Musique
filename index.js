import {Artiste} from "./class/Artiste.js";
import {Musicien} from "./class/musicien.js";
import {DJ} from "./class/dj.js";
import {Groupe} from "./class/groupe.js";


let a1 = new Musicien("Michel",
    "Jean",
    null,
    "jazz",
    Artiste.STATUT_ACTIVITE.Inactif,
    ["guitar", "saxophone"],
    Musicien.NIVEAU_EXPERTISE.Debutant);

let a2 = new DJ("Bernard",
    "Alain",
    new Date(),
    "electro",
    Artiste.STATUT_ACTIVITE.Actif,
    ["Mac", "platine", "Ableton Live", "Logic Pro X"],
    "techno");

let g1 = new Groupe("")

// a1.afficherInfo();
a2.afficherInfo();



// a1.commencerCarriere(new Date());
// a1.afficherInfo();

// a1.prendreRetraite();
// a1.afficherInfo();




