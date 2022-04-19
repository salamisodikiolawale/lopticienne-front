export class Article{
    id:number=0;
    name:string="";
    price:number=0;
    quantity:number=0;
    color:string="";
    createAt:string="";
    endAt:string="";
    image:string="";
    type:TypeArticle=TypeArticle.LENTILLE_CORRECTRICE;
    gender:Gender=Gender.Homme;
}

export enum Gender {
    Homme = "HOMME",
    FEMME = "FEMME",
    ENFANT = "ENFANT",
}

export enum TypeArticle {
    LENTILLE_DE_COULEUR = "LENTILLE_DE_COULEUR",
    LENTILLE_CORRECTRICE = "LENTILLE_CORRECTRICE",
    LENTILLE_JOURNALIERE = "LENTILLE_JOURNALIERE",
    LUNETTE_DE_VUE = "LUNETTE_DE_VUE",
    LUNETTE_DE_SOLEIL = "LUNETTE_DE_SOLEIL",

}