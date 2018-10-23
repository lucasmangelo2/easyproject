export class Card {
    public id :string;
    public title : string;
    public description : string;
}

export class Stage {
    public id :string;
    public title : string;
    public cards : Card[];
}