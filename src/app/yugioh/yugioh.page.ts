import { Card, DataService } from "../services/data.service";
import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

import { Router } from "@angular/router";

@Component({
  selector: "app-yugioh",
  templateUrl: "yugioh.page.html",
  styleUrls: ["yugioh.page.scss"]
})
export class YugiohPage implements OnInit {
  constructor(private router: Router, private dataService: DataService) {
    // for (let i = 0; i < this.thisCard.length+1; i++) {
    //   this.thisCard.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }
  query: string;
  searchResults: any;
  thisCard = Card;
  currentSort: any;
  public searchTerm: string = "";
  public yugiohDatabase: any;
  searching: any = false;
  searchControl: FormControl;

  cards = [
    {
      Id: 1,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/82726_200w.jpg",
      Name: "Artifact Durendal",
      Rarity: "Ultimate",
      Edition: "1st Edition",
      Pack: "PRIO",
      Owned: 2,
      OPrice: 10,
      PPrice: 7.57,
      CPrice: 9.08,
      Projection: 88,
      URL: "primal-origin/artifact%20durendal%20utr",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 2,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/920975.jpg",
      Name: "Number 9: Dyson Sphere",
      Rarity: "Ultimate",
      Edition: "1st Edition",
      Pack: "ABYR",
      Owned: 1,
      OPrice: 5,
      PPrice: 6.84,
      CPrice: 7.03,
      Projection: 6.3 - 6.3,
      URL: "abyss-rising/number%209%20dyson%20sphere%20utr",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 3,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/334610.jpg",
      Name: "Vanity's Fiend",
      Rarity: "Ultimate",
      Edition: "Unlimited",
      Pack: "OP01",
      Owned: 2,
      OPrice: 25,
      PPrice: 25.29,
      CPrice: 25.24,
      Projection: 6.3 - 6.3,
      URL: "cyberdark-impact/vanitys%20fiend%20utr",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 4,
      Icon: "https://images-na.ssl-images-amazon.com/images/I/51FmkkkhZ7L.jpg",
      Name: "Earthbound Immortal Uru",
      Rarity: "Ultimate",
      Edition: "Unlimited",
      Pack: "SOVR",
      Owned: 1,
      OPrice: 15.18,
      PPrice: 16.77,
      CPrice: 16.12,
      Projection: 6.3 - 6.3,
      URL: "stardust-overdrive/earthbound%20immortal%20uru%20utr",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 5,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1064498.jpg",
      Name: "Yazi, Evil of the Yang Zing",
      Rarity: "Ultimate",
      Edition: "1st Edition",
      Pack: "NECH",
      Owned: 1,
      OPrice: 7,
      PPrice: 13.19,
      CPrice: 13.35,
      Projection: 6.3 - 6.3,
      URL:
        "the-new-challengers/yazi-evil-of-the-yang-zing-ultimate-rare?xid=i24b24239456f4aa2a782cb244cd7d698",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 6,
      Icon: "https://images-na.ssl-images-amazon.com/images/I/51x6y3XkGIL.jpg",
      Name: "Karakuri Steel Shogun MDL 00X 'Bureido'",
      Rarity: "Ultimate",
      Edition: "Unlimited",
      Pack: "STOR",
      Owned: 1,
      OPrice: 2.9,
      PPrice: 6.23,
      CPrice: 6.62,
      Projection: 6.3 - 6.3,
      URL:
        "storm-of-ragnarok/karakuri%20steel%20shogun%20mdl%2000x%20bureido%20utr",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 7,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/58430_200w.jpg",
      Name: "Karakuri Shogun MDL 00 'Burei'",
      Rarity: "Ultimate",
      Edition: "1st Edition",
      Pack: "STBL",
      Owned: 1,
      OPrice: 5,
      PPrice: 23.05,
      CPrice: 22.88,
      Projection: 6.3 - 6.3,
      URL: "starstrike-blast/karakuri%20shogun%20mdl%2000%20burei%20utr",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 8,
      Icon:
        "https://i1.wp.com/www.tradingcardmint.com/wp-content/uploads/2017/07/CROS-EN038U-Nekroz-of-Sophia-Ultimate-Rare.jpg?fit=490%2C704&ssl=1",
      Name: "Nekroz of Sophia",
      Rarity: "Ultimate",
      Edition: "1st Edition",
      Pack: "CROS",
      Owned: 1,
      OPrice: 9,
      PPrice: 4.94,
      CPrice: 5.38,
      Projection: 6.3 - 6.3,
      URL: "crossed-souls/nekroz%20of%20sophia%20utr",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 9,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/208263.jpg",
      Name: "Tualatin",
      Rarity: "Secret",
      Edition: "Unlimited",
      Pack: "LODT",
      Owned: 1,
      OPrice: 4.99,
      PPrice: 4.1,
      CPrice: 4.49,
      Projection: 6.3 - 6.3,
      URL:
        "light-of-destruction/tualatin?xid=i208dfba6cfb74dffb03983fde18e041a",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 10,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1094706.jpg",
      Name: "Amorphage Sloth",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "SHVI",
      Owned: 1,
      OPrice: 12,
      PPrice: 2.65,
      CPrice: 1.98,
      Projection: 6.3 - 6.3,
      URL:
        "shining-victories/amorphage-sloth?xid=i43c7d98ca58d41ea879af7d5c278e74d",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 11,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/322465.jpg",
      Name: "Phantom of Chaos",
      Rarity: "Secret",
      Edition: "Unlimited",
      Pack: "LCGX",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.9,
      CPrice: 2.07,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-collection-2/phantom-of-chaos?xid=i088778deba574752b9e5d4ba2671a601",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 12,
      Icon:
        "https://crystal-cdn3.crystalcommerce.com/photos/6414780/SPWAEN016.jpg",
      Name: "Magical Muketeer Caspar",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "SPWA",
      Owned: 1,
      OPrice: 12,
      PPrice: 13.37,
      CPrice: 9.41,
      Projection: 6.3 - 6.3,
      URL: "spirit-warriors/magical%20musketeer%20caspar",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 13,
      Icon:
        "https://static-3.studiobebop.net/ygo_data/card_images/Gnomaterial.jpg",
      Name: "Gnomaterial",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "DANE",
      Owned: 1,
      OPrice: 5,
      PPrice: 11.08,
      CPrice: 11.26,
      Projection: 6.3 - 6.3,
      URL: "dark-neostorm/gnomaterial",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 14,
      Icon:
        "https://i1.wp.com/www.tradingcardmint.com/wp-content/uploads/2017/11/SPWA-EN019-Magical-Musketeer-Starfire-Secret-Rare.jpg?fit=490%2C700&ssl=1",
      Name: "Magical Musketeer Starfire",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "SPWA",
      Owned: 1,
      OPrice: 5,
      PPrice: 9.0,
      CPrice: 7.56,
      Projection: 6.3 - 6.3,
      URL: "spirit-warriors/magical%20musketeer%20starfire",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 15,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/184130_200w.jpg",
      Name: "Psychic Wheeleder",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "SAST",
      Owned: 3,
      OPrice: 5,
      PPrice: 5.62,
      CPrice: 5.37,
      Projection: 6.3 - 6.3,
      URL: "savage-strike/psychic%20wheeleder",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 16,
      Icon: "https://images-na.ssl-images-amazon.com/images/I/519WdrFF1wL.jpg",
      Name: "Sky Striker Mobilize - Engage!",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "BLHR",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.9,
      CPrice: 3.18,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-heros-revenge/sky-striker-mobilize-engage?xid=i13c8a2a3eb534d2d83984ceb95bd8ad1",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 17,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/94569_200w.jpg",
      Name: "Yazi, Evil of the Yang Zing",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP15",
      Owned: 1,
      OPrice: 5,
      PPrice: 5.84,
      CPrice: 5.66,
      Projection: 6.3 - 6.3,
      URL:
        "2015-mega-tins-mega-pack/yazi-evil-of-the-yang-zing?xid=ie4012d5dd3d74b039e6d303ce4e1827b",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 18,
      Icon:
        "https://images-na.ssl-images-amazon.com/images/I/61dLkg5ZSXL._SY450_.jpg",
      Name: "Nirvana High Paladin",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "TDIL",
      Owned: 1,
      OPrice: 9,
      PPrice: 5.99,
      CPrice: 5.9,
      Projection: 6.3 - 6.3,
      URL: "the-dark-illusion/nirvana%20high%20paladin",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 19,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1079406.jpg",
      Name: "PSY-Framelord Omega",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 1,
      OPrice: 10,
      PPrice: 4.76,
      CPrice: 5.46,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-lights-revenge/psy-framelord-omega?xid=i15e5da63913a4f06b8ceaaa81fc00d3b",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 20,
      Icon:
        "https://static-3.studiobebop.net/ygo_data/card_images/Nekroz_of_Gungnir.jpg",
      Name: "Nekroz of Gungnir",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP15",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.65,
      CPrice: 3.46,
      Projection: 6.3 - 6.3,
      URL:
        "2015-mega-tins-mega-pack/nekroz-of-gungnir?xid=id7466c4e7095470aa38d73b70239860d",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 21,
      Icon: "https://images-na.ssl-images-amazon.com/images/I/51NV25xafQL.jpg",
      Name: "Topologic Bomber Dragon",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP18",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.72,
      CPrice: 0.75,
      Projection: 6.3 - 6.3,
      URL:
        "2018-mega-tins-mega-pack/topologic-bomber-dragon?xid=i58b0cff53be14991a43256f3f5cc85d5",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 22,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/193634_200w.jpg",
      Name: "Harpie Conductor",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "BLHR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.83,
      CPrice: 0.89,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-heros-revenge/harpie-conductor?xid=i97126d3637884f6693af43b4f21ebf55",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 23,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1458341.jpg",
      Name: "Cyberse Quantum Dragon",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "SAST",
      Owned: 1,
      OPrice: 5,
      PPrice: 9.41,
      CPrice: 8.65,
      Projection: 6.3 - 6.3,
      URL: "savage-strike/cyberse%20quantum%20dragon",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 24,
      Icon:
        "https://images-na.ssl-images-amazon.com/images/I/51%2Bira5ZGfL.jpg",
      Name: "Summoned Skull",
      Rarity: "Ultra",
      Edition: "Limited",
      Pack: "YAP1",
      Owned: 1,
      OPrice: 5,
      PPrice: 6.54,
      CPrice: 7.52,
      Projection: 6.3 - 6.3,
      URL:
        "anniversary-pack/summoned-skull?xid=i1ec82a9e7bf949c2b4ff4bd0d0803bae",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 25,
      Icon: "https://images-na.ssl-images-amazon.com/images/I/511RwQj898L.jpg",
      Name: "Obelisk the Tormentor",
      Rarity: "Ultra",
      Edition: "Limited",
      Pack: "GLD4",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.46,
      CPrice: 3.45,
      Projection: 6.3 - 6.3,
      URL:
        "gold-series-4-pyramids-edition/obelisk-the-tormentor?xid=i9e9b8bf916b54c3ea827a9f6d2f8f265",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 26,
      Icon: "https://i.ebayimg.com/images/g/lEAAAOSwcZ1cT8Op/s-l300.jpg",
      Name: "Altergeist Multifaker",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "FLOD",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.43,
      CPrice: 0.43,
      Projection: 6.3 - 6.3,
      URL: "flames-of-destruction/altergeist%20multifaker",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 27,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1166124.jpg",
      Name: "Ash Blossom & Joyous Spring",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "DUPO",
      Owned: 1,
      OPrice: 5,
      PPrice: 7.88,
      CPrice: 8.82,
      Projection: 6.3 - 6.3,
      URL:
        "duel-power/ash-blossom-and-joyous-spring?xid=i79bd6895cbc7418c9b88ac9955b51c3a",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 28,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1186279.jpg",
      Name: "Ash Blossom & Joyous Spring",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "SHVA",
      Owned: 1,
      OPrice: 5,
      PPrice: 7.19,
      CPrice: 8.86,
      Projection: 6.3 - 6.3,
      URL:
        "shadows-in-valhalla/ash-blossom-and-joyous-spring?xid=i79bd6895cbc7418c9b88ac9955b51c3a",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 29,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1105730.jpg",
      Name: "Meteor Black Comet Dragon",
      Rarity: "Ultra",
      Edition: "Unlimited",
      Pack: "INOV",
      Owned: 1,
      OPrice: 5,
      PPrice: 12.75,
      CPrice: 13.96,
      Projection: 6.3 - 6.3,
      URL: "invasion-vengeance/meteor%20black%20comet%20dragon",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 30,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1102229.jpg",
      Name: "Frightfur Sabre-Tooth",
      Rarity: "Ultra",
      Edition: "1st Ediiton",
      Pack: "MP16",
      Owned: 1,
      OPrice: 5,
      PPrice: 9.81,
      CPrice: 9.97,
      Projection: 6.3 - 6.3,
      URL:
        "2016-mega-tins-mega-pack/frightfur-sabre-tooth?xid=iea038d8343434aaaa797c98c6242c8a2",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 31,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1049982.jpg",
      Name: "Ghostrick Mary",
      Rarity: "Super",
      Edition: "1st Ediiton",
      Pack: "LVAL",
      Owned: 1,
      OPrice: 5,
      PPrice: 6.35,
      CPrice: 6.31,
      Projection: 6.3 - 6.3,
      URL:
        "legacy-of-the-valiant/ghostrick-mary?xid=i3bd1cc64c7f24280883dc2a11bbef66e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 32,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1101948.jpg",
      Name: "Ghost Ogre & Snow Rabbit",
      Rarity: "Super",
      Edition: "Limited",
      Pack: "CT13",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.05,
      CPrice: 1.93,
      Projection: 6.3 - 6.3,
      URL:
        "2016-mega-tins/ghost-ogre-and-snow-rabbit?xid=i0e85cd73310245928c1fdfd16e4e734e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 33,
      Icon:
        "https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1113592.jpg",
      Name: "Effect Veiler",
      Rarity: "Super",
      Edition: "Limited",
      Pack: "ORCS",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.48,
      CPrice: 1.25,
      Projection: 6.3 - 6.3,
      URL:
        "order-of-chaos-se/effect-veiler?xid=i2f7ab270dec54952b6194ff29cad0627",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 34,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/23221_200w.jpg",
      Name: "Soul-Absorbing Bone Tower",
      Rarity: "Rare",
      Edition: "Unlimited/1st Edition",
      Pack: "AST",
      Owned: 3,
      OPrice: 5,
      PPrice: 1.89,
      CPrice: 1.84,
      Projection: 6.3 - 6.3,
      URL:
        "ancient-sanctuary/soul-absorbing-bone-tower?xid=ie64f2cf10ecc4679924f09fc8f1e3581",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 35,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/93982_200w.jpg",
      Name: "Earthbound Immortal Aslla Piscu",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "LC5D",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.55,
      CPrice: 3.62,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-collection-5ds/earthbound-immortal-aslla-piscu?xid=id0dfa94feee4448a8d944d8dbc33fbb6",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 36,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/79086_200w.jpg",
      Name: "Earthbound Immortal Aslla Piscu",
      Rarity: "Secret",
      Edition: "Limited",
      Pack: "CT06",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.84,
      CPrice: 3.89,
      Projection: 6.3 - 6.3,
      URL:
        "2009-collectors-tin/earthbound-immortal-aslla-piscu?xid=i15d7e16aabbe4b7798b02199acc7cad9",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 37,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/56761_200w.jpg",
      Name: "Dandylion",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "LCGX",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.88,
      CPrice: 0.96,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-collection-2/dandylion?xid=ic2b7b8199d174831b2d3829ed43b2d70",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 38,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/122292_200w.jpg",
      Name: "Obelisk the Tormentor",
      Rarity: "Secret",
      Edition: "Limited",
      Pack: "CT13",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.12,
      CPrice: 1.57,
      Projection: 6.3 - 6.3,
      URL:
        "2016-mega-tins/obelisk-the-tormentor?xid=i5f2270d84fd64e288af4be547de08572",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 39,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/79079_200w.jpg",
      Name: "Obelisk the Tormentor",
      Rarity: "Ultra",
      Edition: "Limited",
      Pack: "LC01",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.76,
      CPrice: 0.93,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-collection-1/obelisk-the-tormentor?xid=i5f2270d84fd64e288af4be547de08572",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 40,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/122293_200w.jpg",
      Name: "Blue-Eyes White Dragon",
      Rarity: "Ultra",
      Edition: "Limited",
      Pack: "CT13",
      Owned: 1,
      OPrice: 5,
      PPrice: 4.2,
      CPrice: 5.89,
      Projection: 6.3 - 6.3,
      URL:
        "2016-mega-tins/blue-eyes-white-dragon?xid=i78161d571e874b2b8614319f4692963c",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 41,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/97874_200w.jpg",
      Name: "Elemental Hero Blazeman",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "WSUP",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.67,
      CPrice: 2.1,
      Projection: 6.3 - 6.3,
      URL:
        "world-superstars/elemental-hero-blazeman?xid=i770eb8f4f4e242889244cc5a1d577d8b",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 42,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/95476_200w.jpg",
      Name: "Farfa, Malebranche of the Burning Abyss",
      Rarity: "Rare",
      Edition: "1st Edition",
      Pack: "SECE",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.54,
      CPrice: 1.62,
      Projection: 6.3 - 6.3,
      URL:
        "secrets-of-eternity/farfa-malebranche-of-the-burning-abyss?xid=if956bf4ab1c948d4bdf7ad409a0a8ff5",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 43,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/32968_200w.jpg",
      Name: "Summoned Skull",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "DPYG",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.64,
      CPrice: 0.81,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-pack-yugi/summoned-skull?xid=ibb8c464b2dbd453d8181a35eef2c184e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 44,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/70893_200w.jpg",
      Name: "Fire King Avatar Yaksha",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "JOTL",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.39,
      CPrice: 1.4,
      Projection: 6.3 - 6.3,
      URL:
        "judgment-of-the-light/fire-king-avatar-yaksha?xid=i919ea0f27b6f48a39f33911ed6fedeaf",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 45,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/193597_200w.jpg",
      Name: "Vision Hero Faris",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "BLHR",
      Owned: 1,
      OPrice: 5,
      PPrice: 10.56,
      CPrice: 15.94,
      Projection: 6.3 - 6.3,
      URL: "battles-of-legend-heros-revenge/vision%20hero%20faris",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 46,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/67708_200w.jpg",
      Name: "Fire King Avatar Barong",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "SDOK",
      Owned: 2,
      OPrice: 5,
      PPrice: 1.81,
      CPrice: 2.19,
      Projection: 6.3 - 6.3,
      URL:
        "structure-deck-onslaught-of-the-fire-kings/fire%20king%20avatar%20barong",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 47,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/26457_200w.jpg",
      Name: "Volcanic Doomfire",
      Rarity: "Secret",
      Edition: "Limited",
      Pack: "CT04",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.73,
      CPrice: 2.73,
      Projection: 6.3 - 6.3,
      URL:
        "2007-collectors-tin/volcanic-doomfire?xid=i68e36ebdf83848459fd6a09890beeb65",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 48,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/111196_200w.jpg",
      Name: "Black Luster Solder - Sacred Soldier",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BOSH",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.34,
      CPrice: 2.29,
      Projection: 6.3 - 6.3,
      URL: "breakers-of-shadow/black%20luster%20soldier%20sacred%20soldier",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 49,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/154001_200w.jpg",
      Name: "The Winged Dragon of Ra - Sphere Mode",
      Rarity: "Super",
      Edition: "Limited",
      Pack: "CIBR",
      Owned: 1,
      OPrice: 5,
      PPrice: 4.0,
      CPrice: 4.68,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/the-winged-dragon-of-ra-sphere-mode?xid=i21fc7414b0e24d4a96313e9957b13e38",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 50,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/67635_200w.jpg",
      Name: "Pyrorex the Elemental Lord",
      Rarity: "Secret",
      Edition: "Unlimited",
      Pack: "CBLZ",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.34,
      CPrice: 0.95,
      Projection: 6.3 - 6.3,
      URL:
        "cosmo-blazer/pyrorex-the-elemental-lord?xid=id52d349b52354fa19b5727b8550912fb",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 51,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/129992_200w.jpg",
      Name: "Kumongous, the Sticky String Kaiju",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "OP04",
      Owned: 2,
      OPrice: 5,
      PPrice: 6.37,
      CPrice: 5.8,
      Projection: 6.3 - 6.3,
      URL:
        "ots-tournament-pack-4/kumongous-the-sticky-string-kaiju?xid=i58597475b986404dba3a620521020abf",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 52,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/67707_200w.jpg",
      Name: "Fire King High Avatar Garunix",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "SDOK",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.12,
      CPrice: 1.35,
      Projection: 6.3 - 6.3,
      URL:
        "structure-deck-onslaught-of-the-fire-kings/fire%20king%20high%20avatar%20garunix",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 53,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148295_200w.jpg",
      Name: "Altergeist Meluseek",
      Rarity: "Ultra",
      Edition: "Unlimited",
      Pack: "CIBR",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.14,
      CPrice: 3.2,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/altergeist-meluseek?xid=i981bf78f34bb43e196a58abf1a8c93d9",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 54,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/27439_200w.jpg",
      Name: "Vampire's Curse",
      Rarity: "Ultra",
      Edition: "Unlimited",
      Pack: "PTDN",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.81,
      CPrice: 2.88,
      Projection: 6.3 - 6.3,
      URL:
        "phantom-darkness/vampires-curse?xid=ibdd529bb00a64bb38d98b6f3de5b9108",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 55,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/131134_200w.jpg",
      Name: "Supreme King Gate Zero",
      Rarity: "Super",
      Edition: "Unlimited/1st Edition",
      Pack: "MACR",
      Owned: 3,
      OPrice: 5,
      PPrice: 1.3,
      CPrice: 1.12,
      Projection: 6.3 - 6.3,
      URL: "maximum-crisis/supreme%20king%20gate%20zero",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 56,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/105144_200w.jpg",
      Name: "Artifact Moralltach",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "MP15",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.99,
      CPrice: 3.41,
      Projection: 6.3 - 6.3,
      URL:
        "2015-mega-tins-mega-pack/artifact-moralltach?xid=i42ccc0f128ec49c3853e490c414d1da2",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 57,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/136801_200w.jpg",
      Name: "Abyss Actor - Curtain Raiser",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.12,
      CPrice: 1.09,
      Projection: 6.3 - 6.3,
      URL: "battles-of-legend-lights-revenge/abyss%20actor%20curtain%20raiser",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 58,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/141317_200w.jpg",
      Name: "Ghost Reaper & Winter Cherries",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP17",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.89,
      CPrice: 0.99,
      Projection: 6.3 - 6.3,
      URL:
        "2017-mega-tins-mega-pack/ghost-reaper-and-winter-cherries?xid=i9dbe0c5701fb4eaeb4ad814198d39ddd",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 59,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/179255_200w.jpg",
      Name: "Necroworld Banshee",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "SR07",
      Owned: 3,
      OPrice: 5,
      PPrice: 5.38,
      CPrice: 5.67,
      Projection: 6.3 - 6.3,
      URL: "structure-deck-zombie-horde/necroworld%20banshee",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 60,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/186976_200w.jpg",
      Name: "Nekroz of Brionac",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "DUPO",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.31,
      CPrice: 2.78,
      Projection: 6.3 - 6.3,
      URL: "duel-power/nekroz-of-brionac?xid=ib4913186b17d44ae9186967208f8151a",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 61,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/183129_200w.jpg",
      Name: "Cyber Angel Izana",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "LED4",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.32,
      CPrice: 0.35,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-sisters-of-the-rose/cyber-angel-izana?xid=i4fde43f6f32d480fbebe14d24dbc8eb0",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 62,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/96088_200w.jpg",
      Name: "Nekroz of Decisive Armor",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "THSF",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.81,
      CPrice: 0.94,
      Projection: 6.3 - 6.3,
      URL: "the-secret-forces/nekroz%20of%20decisive%20armor",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 63,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/122964_200w.jpg",
      Name: "Blue-Eyes Ultimate Dragon",
      Rarity: "Rare",
      Edition: "1st Edition",
      Pack: "DPRP",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.62,
      CPrice: 1.33,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-pack-rivals-of-the-pharaoh/blue-eyes-ultimate-dragon?xid=i777cd5ed41bb48c2bc5728e91e164aec",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 64,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/56855_200w.jpg",
      Name: "Evil Hero Infernal Sniper",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "LCGX",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.97,
      CPrice: 1.04,
      Projection: 6.3 - 6.3,
      URL: "legendary-collection-2/evil-hero-infernal-sniper",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 65,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/48114_200w.jpg",
      Name: "Masked Hero Vapor",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "GENF",
      Owned: 1,
      OPrice: 5,
      PPrice: 4.19,
      CPrice: 4.49,
      Projection: 6.3 - 6.3,
      URL: "generation-force/masked%20hero%20vapor",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 66,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/94081_200w.jpg",
      Name: "Naturia Barkion",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "LC5D",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.86,
      CPrice: 9.66,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-collection-5ds/naturia-barkion?xid=i4ad81a84ac2b48639337e4ba3922b09f",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 67,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177305_200w.jpg",
      Name: "Blackwing Full Armor Master",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 1,
      OPrice: 5,
      PPrice: 11.55,
      CPrice: 13.62,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/blackwing%20full%20armor%20master",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 68,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/40070_200w.jpg",
      Name: "Overmind Archfiend",
      Rarity: "Ultra",
      Edition: "Unlimited",
      Pack: "EXVC",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.99,
      CPrice: 0.87,
      Projection: 6.3 - 6.3,
      URL: "extreme-victory/overmind%20archfiend",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 69,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/122437_200w.jpg",
      Name: "Scarlight Red Dragon Archfiend",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP16",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.35,
      CPrice: 1.28,
      Projection: 6.3 - 6.3,
      URL:
        "2016-mega-tins-mega-pack/scarlight-red-dragon-archfiend?xid=iac19b68ee1e946af8b8494828a44e163",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 70,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/93832_200w.jpg",
      Name: "Black Rose Dragon",
      Rarity: "Ultra",
      Edition: "Limited",
      Pack: "LC05",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.34,
      CPrice: 0.43,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-collection-5ds/black-rose-dragon-lc05-en004?xid=if7dd3efd46a84aea993cfda8e26a6089",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 71,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/106037_200w.jpg",
      Name: "Hot Red Dragon Archfiend",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "HSRD",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.43,
      CPrice: 2.16,
      Projection: 6.3 - 6.3,
      URL:
        "high-speed-riders/hot-red-dragon-archfiend?xid=id24615e9f57b4a288241476d24f479fa",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 72,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/122319_200w.jpg",
      Name: "Clear Wing Synchro Dragon",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP16",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.04,
      CPrice: 2.13,
      Projection: 6.3 - 6.3,
      URL:
        "2016-mega-tins-mega-pack/clear-wing-synchro-dragon?xid=i8f7d443c8ced4759b43ecb7346511c55",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 73,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/152403_200w.jpg",
      Name: "Legendary Six Samurai - Shi En",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "SPWA",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.46,
      CPrice: 2.7,
      Projection: 6.3 - 6.3,
      URL:
        "spirit-warriors/legendary-six-samurai-shi-en?xid=i71888102ed9d4e4499632b3d58fe9b4e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 74,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/28481_200w.jpg",
      Name: "Tempest Magician",
      Rarity: "Secret",
      Edition: "Unlimited",
      Pack: "CSOC",
      Owned: 1,
      OPrice: 12.59,
      PPrice: 9.51,
      CPrice: 9.69,
      Projection: 6.3 - 6.3,
      URL:
        "crossroads-of-chaos/tempest-magician?xid=i39f63f699bfe47649fb5396c69459ddd",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 75,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/122294_200w.jpg",
      Name: "Blue-Eyes Spirit Dragon",
      Rarity: "Ultra",
      Edition: "Limited",
      Pack: "CT13",
      Owned: 1,
      OPrice: 5,
      PPrice: 4.07,
      CPrice: 6.75,
      Projection: 6.3 - 6.3,
      URL:
        "2016-mega-tins/blue-eyes-spirit-dragon?xid=i601ae84d2fa14ccaa039f1228cb54c57",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 76,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/186958_200w.jpg",
      Name: "Crystal Wing Synchro Dragon",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "DUPO",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.87,
      CPrice: 3.1,
      Projection: 6.3 - 6.3,
      URL:
        "duel-power/crystal-wing-synchro-dragon?xid=i406b71836a3e4a9d8a13d679aaa713d5",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 77,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/115847_200w.jpg",
      Name: "Ignister Prominence, the Blasting Dracoslayer",
      Rarity: "Gold",
      Edition: "1st Edition",
      Pack: "PGL3",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.55,
      CPrice: 0.55,
      Projection: 6.3 - 6.3,
      URL:
        "premium-gold-infinite-gold/ignister-prominence-the-blasting-dracoslayer?xid=i8ced554710df4ef99d56a26fb1691580",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 78,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/67287_200w.jpg",
      Name: "Abyss Dweller",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "ABYR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.7,
      CPrice: 1.02,
      Projection: 6.3 - 6.3,
      URL: "abyss-rising/abyss-dweller?xid=ied382d034467455dbdb97f3704123742",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 79,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/96934_200w.jpg",
      Name: "Lavalval Chain",
      Rarity: "Gold",
      Edition: "1st Edition",
      Pack: "PGL2",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.83,
      CPrice: 2.77,
      Projection: 6.3 - 6.3,
      URL:
        "premium-gold-return-of-the-bling/lavalval-chain?xid=i2f02f0a921ee4469b48483f284925a45",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 80,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/136856_200w.jpg",
      Name: "Number 107: Galaxy-Eyes Tachyon Dragon",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.33,
      CPrice: 4.3,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-lights-revenge/number-107-galaxy-eyes-tachyon-dragon?xid=ice392c47e7fd4ca7a9c31d1fad37eae0",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 81,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/92389_200w.jpg",
      Name: "Stellarknight Delteros",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "DUEA",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.7,
      CPrice: 1.72,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-alliance/stellarknight-delteros-secret-rare?xid=i1c4bd753e0c944ee9a6920345e9b7b4f",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 82,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/136857_200w.jpg",
      Name: "Evilswarm Exciton Knight",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.12,
      CPrice: 2.04,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-lights-revenge/evilswarm-exciton-knight?xid=i9c4e3834715f4012becdc22a464aa3d2",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 83,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/189391_200w.jpg",
      Name: "Firewall Exceed Dragon",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "DANE",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.6,
      CPrice: 0.55,
      Projection: 6.3 - 6.3,
      URL: "dark-neostorm/firewall%20exceed%20dragon",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 84,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/111894_200w.jpg",
      Name: "Number 101: Silent Honor Ark",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "WIRA",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.49,
      CPrice: 0.45,
      Projection: 6.3 - 6.3,
      URL:
        "wing-raiders/number-101-silent-honor-ark?xid=i1c1d261e44284770acb99ca88e95b861",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 85,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/124749_200w.jpg",
      Name: "Darktellarknight Batlamyus",
      Rarity: "Ultra",
      Edition: "Unlimited",
      Pack: "INOV",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.53,
      CPrice: 0.74,
      Projection: 6.3 - 6.3,
      URL: "invasion-vengeance/darktellarknight%20batlamyus",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 86,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/105413_200w.jpg",
      Name: "Stellarknight Constellar Diamond",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "MP15",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.99,
      CPrice: 1.19,
      Projection: 6.3 - 6.3,
      URL:
        "2015-mega-tins-mega-pack/stellarknight-constellar-diamond?xid=if373039a4e4640a3a21fa6604f3bc180",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 87,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/181640_200w.jpg",
      Name: "Summon Sorceress",
      Rarity: "Super",
      Edition: "Limited",
      Pack: "SOFU",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.88,
      CPrice: 0.86,
      Projection: 6.3 - 6.3,
      URL: "soul-fusion/summon-sorceress?xid=if8fe132a7d3b4e00802cf60e344d4c81",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 88,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/170685_200w.jpg",
      Name: "Crusadia Equimax",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "CYHO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.8,
      CPrice: 0.72,
      Projection: 6.3 - 6.3,
      URL: "cybernetic-horizon/crusadia%20equimax",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 89,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/194650_200w.jpg",
      Name: "Marincess Marbled Rock",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "RIRA",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.77,
      CPrice: 1.22,
      Projection: 6.3 - 6.3,
      URL: "rising-rampage/marincess%20marbled%20rock",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 90,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/193636_200w.jpg",
      Name: "Traptrix Sera",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "BLHR",
      Owned: 1,
      OPrice: 5,
      PPrice: 11.49,
      CPrice: 14.36,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-heros-revenge/traptrix-sera?xid=if7abd66fe906458eb6fe636f79de6bc7",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 91,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/158156_200w.jpg",
      Name: "Qliphort Genius",
      Rarity: "Rare",
      Edition: "1st Edition",
      Pack: "EXFO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.27,
      CPrice: 0.29,
      Projection: 6.3 - 6.3,
      URL:
        "extreme-force/qliphort-genius?xid=ieec79748e88c4183b3f2c489945fc118",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 92,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/174829_200w.jpg",
      Name: "Saryuja Skull Dread",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP18",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.37,
      CPrice: 3.37,
      Projection: 6.3 - 6.3,
      URL:
        "2018-mega-tins-mega-pack/saryuja-skull-dread?xid=id4fa6b7d388344eda5cad7152cce155b",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 93,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/72471_200w.jpg",
      Name: "Charge of the Light Brigade",
      Rarity: "Super",
      Edition: "Limited",
      Pack: "SOVR",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.89,
      CPrice: 1.64,
      Projection: 6.3 - 6.3,
      URL:
        "stardust-overdrive/charge-of-the-light-brigade?xid=ie41f26612f484caa96cabee05879e4c0",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 94,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/96964_200w.jpg",
      Name: "The Grand Spellbook Tower",
      Rarity: "Gold",
      Edition: "1st Edition",
      Pack: "PGL2",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.96,
      CPrice: 2.81,
      Projection: 6.3 - 6.3,
      URL:
        "premium-gold-return-of-the-bling/the-grand-spellbook-tower?xid=ib0b4159322b34e7ab6c78ae382a97639",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 95,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/24660_200w.jpg",
      Name: "D.D. Designator",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "DR2",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.45,
      CPrice: 3.13,
      Projection: 6.3 - 6.3,
      URL:
        "dark-revelation-volume-2/dd-designator?xid=if5a23aa31a074a05b398f9b28bc7f334",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 96,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/136864_200w.jpg",
      Name: "Spellbook of Secrets",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 2,
      OPrice: 5,
      PPrice: 2.26,
      CPrice: 2.75,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-lights-revenge/spellbook-of-secrets?xid=if8c3900624144326a31522d9f6c1257e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 97,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/136817_200w.jpg",
      Name: "Double Evolution Pill",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 1,
      OPrice: 5,
      PPrice: 8.36,
      CPrice: 3.36,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-lights-revenge/double-evolution-pill?xid=ib8d2db88ebf14079874984f61c4d845b",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 98,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/127321_200w.jpg",
      Name: "That Grass Looks Greener",
      Rarity: "Secret",
      Edition: "Unlimited",
      Pack: "RATE",
      Owned: 1,
      OPrice: 9,
      PPrice: 6.56,
      CPrice: 6.77,
      Projection: 6.3 - 6.3,
      URL: "raging-tempest/that%20grass%20looks%20greener",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 99,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/188934_200w.jpg",
      Name: "Orcustrated Babel",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "OP10",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.93,
      CPrice: 1.39,
      Projection: 6.3 - 6.3,
      URL:
        "ots-tournament-pack-10/orcustrated-babel?xid=iae68e2606cc74876997e12a9b364ac5c",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 100,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/66945_200w.jpg",
      Name: "Machine Duplication",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "LCYW",
      Owned: 2,
      OPrice: 5,
      PPrice: 3.97,
      CPrice: 4.95,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-collection-3-yugis-world/machine-duplication?xid=i13afb3be0f0847beb2fef243eee78d00",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 101,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/106051_200w.jpg",
      Name: "Emergency Teleport",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "HSRD",
      Owned: 1,
      OPrice: 3,
      PPrice: 6.72,
      CPrice: 5.44,
      Projection: 6.3 - 6.3,
      URL:
        "high-speed-riders/emergency-teleport?xid=i5644f482d1474c129daca71ebe51e299",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 102,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/136863_200w.jpg",
      Name: "Into the Void",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 1,
      OPrice: 5,
      PPrice: 4.71,
      CPrice: 9.12,
      Projection: 6.3 - 6.3,
      URL: "battles-of-legend-lights-revenge/into-the-void",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 103,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/93939_200w.jpg",
      Name: "Magic Planter",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "LC5D",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.02,
      CPrice: 0.96,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-collection-5ds/magic-planter?xid=icd3471b16f9344e3b8e41abe5b5ed39e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 104,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/174842_200w.jpg",
      Name: "Spellbook of Knowledge",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "MP18",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.04,
      CPrice: 3.54,
      Projection: 6.3 - 6.3,
      URL:
        "2018-mega-tins-mega-pack/spellbook-of-knowledge?xid=i434a07373b2142debd7cee8aada10ab0",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 105,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/139235_200w.jpg",
      Name: "Spellbook of Knowledge",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "COTD",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.54,
      CPrice: 3.32,
      Projection: 6.3 - 6.3,
      URL:
        "code-of-the-duelist/spellbook-of-knowledge?xid=i434a07373b2142debd7cee8aada10ab0",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 106,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/122969_200w.jpg",
      Name: "Silver's Cry",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "DPRP",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.17,
      CPrice: 1.64,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-pack-rivals-of-the-pharaoh/silvers-cry?xid=ic54b1859704648958ad073494ff5d723",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 107,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/58831_200w.jpg",
      Name: "Ectoplasmer",
      Rarity: "Ultimate",
      Edition: "1st Edition",
      Pack: "SOD",
      Owned: 1,
      OPrice: 5,
      PPrice: 4.18,
      CPrice: 4.18,
      Projection: 6.3 - 6.3,
      URL: "soul-of-the-duelist/ectoplasmer%20utr",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 108,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/92403_200w.jpg",
      Name: "Stellarnova Alpha",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "DUEA",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.65,
      CPrice: 3.85,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-alliance/stellarnova-alpha?xid=iebfa0591578243f78b3c61d32a594b5f",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 109,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/57251_200w.jpg",
      Name: "Solemn Warning",
      Rarity: "Super",
      Edition: "Limited",
      Pack: "CT08",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.85,
      CPrice: 2.93,
      Projection: 6.3 - 6.3,
      URL:
        "2011-collectors-tins/solemn-warning?xid=i07e3fe9e238e4db2abfced76205c5ce9",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 110,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/122528_200w.jpg",
      Name: "Solemn Strike",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP16",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.14,
      CPrice: 3.56,
      Projection: 6.3 - 6.3,
      URL:
        "2016-mega-tins-mega-pack/solemn-strike?xid=i524a623ee3e341d4ac4714dce056487f",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 111,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/107713_200w.jpg",
      Name: "Blazing Mirror Force",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "DOCS",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.37,
      CPrice: 2.0,
      Projection: 6.3 - 6.3,
      URL:
        "dimension-of-chaos/blazing-mirror-force?xid=i7c621279fcd04fae96232bf36fa3c64a",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 112,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/174415_200w.jpg",
      Name: "Waking the Dragon",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "OP08",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.1,
      CPrice: 1.01,
      Projection: 6.3 - 6.3,
      URL:
        "ots-tournament-pack-8/waking-the-dragon?xid=ia11067150c07427c9a3ea12a97d3bbb9",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 113,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/102495_200w.jpg",
      Name: "Storming Mirror Force",
      Rarity: "Secret",
      Edition: "Unlimited",
      Pack: "CORE",
      Owned: 1,
      OPrice: 13,
      PPrice: 13.05,
      CPrice: 12.97,
      Projection: 6.3 - 6.3,
      URL:
        "clash-of-rebellions/storming-mirror-force?xid=ibfd1acaffae44dd5a998b0224e4ab100",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 114,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/185974_200w.jpg",
      Name: "Call of the Haunted (Lost Art)",
      Rarity: "Ultra",
      Edition: "Limited",
      Pack: "LART",
      Owned: 1,
      OPrice: 5,
      PPrice: 4.39,
      CPrice: 5.11,
      Projection: 6.3 - 6.3,
      URL:
        "the-lost-art-promotion/call-of-the-haunted?xid=i49bcae69a53d4612b96e6361f739b649",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 115,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/22532_200w.jpg",
      Name: "Torrential Tribute",
      Rarity: "Ultra",
      Edition: "Unlimited",
      Pack: "LON",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.66,
      CPrice: 4.07,
      Projection: 6.3 - 6.3,
      URL:
        "labyrinth-of-nightmare/torrential-tribute?xid=if4489caf8d7247f4bae98946f5ea63eb",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 116,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/169430_200w.jpg",
      Name: "Torrential Tribute",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLRR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.84,
      CPrice: 0.93,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-relentless-revenge/torrential-tribute?xid=if4489caf8d7247f4bae98946f5ea63eb",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 117,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/186992_200w.jpg",
      Name: "Evenly Matched",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "DUPO",
      Owned: 1,
      OPrice: 5,
      PPrice: 28.69,
      CPrice: 29.95,
      Projection: 6.3 - 6.3,
      URL: "duel-power/evenly-matched?xid=i3132bdf6bc794e04adae3dfabb572574",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 118,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/149347_200w.jpg",
      Name: "Tri-Gate Wizard",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "SDCL",
      Owned: 1,
      OPrice: 10,
      PPrice: 0.84,
      CPrice: 0.46,
      Projection: 6.3 - 6.3,
      URL: "structure-deck-cyberse-link/tri%20gate%20wizard",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 119,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/169425_200w.jpg",
      Name: "Topologic Gumblar Dragon",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "BLRR",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.02,
      CPrice: 2.01,
      Projection: 6.3 - 6.3,
      URL: "battles-of-legend-relentless-revenge/topologic%20gumblar%20dragon",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 120,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/166352_200w.jpg",
      Name: "Knightmare Goblin",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "FLOD",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.05,
      CPrice: 2.21,
      Projection: 6.3 - 6.3,
      URL: "flames-of-destruction/knightmare%20goblin",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 121,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/149346_200w.jpg",
      Name: "Encode Talker",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "SDCL",
      Owned: 3,
      OPrice: 10,
      PPrice: 0.3,
      CPrice: 0.21,
      Projection: 6.3 - 6.3,
      URL: "structure-deck-cyberse-link/encode%20talker",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 122,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/158103_200w.jpg",
      Name: "Excode Talker",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "EXFO",
      Owned: 1,
      OPrice: 5,
      PPrice: 2.5,
      CPrice: 1.97,
      Projection: 6.3 - 6.3,
      URL: "extreme-force/excode%20talker",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 123,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148337_200w.jpg",
      Name: "Akashic Magician",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "CIBR",
      Owned: 1,
      OPrice: 5,
      PPrice: 1.31,
      CPrice: 1.67,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/akashic-magician?xid=i9d4c536d587349dd8a9856fee2c683de",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 124,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/170661_200w.jpg",
      Name: "Cyberse Witch",
      Rarity: "Rare",
      Edition: "1st Edition",
      Pack: "CYHO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.14,
      CPrice: 0.14,
      Projection: 6.3 - 6.3,
      URL:
        "cybernetic-horizon/cyberse-witch?xid=i09ff14b2d2624d52b601ba245d80914b",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 125,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177180_200w.jpg",
      Name: "Abyss Actor - Mellow Madonna",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.45,
      CPrice: 0.55,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss%20actor%20mellow%20madonna",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 126,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/38505_200w.jpg",
      Name: "Dark End Dragon",
      Rarity: "Ultra",
      Edition: "Limited",
      Pack: "JUMP",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.56,
      CPrice: 0.56,
      Projection: 6.3 - 6.3,
      URL:
        "shonen-jump-magazine-promos/dark-end-dragon?xid=ie9b52bc6888a447dae91facdb2bf64f8",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 127,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/136851_200w.jpg",
      Name: "Crystal Wing Synchro Dragon",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.44,
      CPrice: 7.14,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-lights-revenge/crystal-wing-synchro-dragon?xid=i501bbf87230546e0a5b7a099d1d7b19f",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 128,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/194652_200w.jpg",
      Name: "Shaman of the Tenyi",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "RIRA",
      Owned: 2,
      OPrice: 5.99,
      PPrice: 1.52,
      CPrice: 1.77,
      Projection: 6.3 - 6.3,
      URL: "rising-rampage/shaman%20of%20the%20tenyi",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 129,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/123612_200w.jpg",
      Name: "Dark Burning Magic",
      Rarity: "Secret",
      Edition: "Limited",
      Pack: "LDK2",
      Owned: 1,
      OPrice: 4.1,
      PPrice: 2.85,
      CPrice: 3.33,
      Projection: 6.3 - 6.3,
      URL: "legendary-decks-ii/dark%20burning%20magic",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 130,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/194646_200w.jpg",
      Name: "Fortune Lady Every",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "RIRA",
      Owned: 1,
      OPrice: 7.15,
      PPrice: 3.7,
      CPrice: 3.72,
      Projection: 6.3 - 6.3,
      URL: "rising-rampage/fortune%20lady%20every",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 131,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/193675_200w.jpg",
      Name: "Summon Limit",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLHR",
      Owned: 1,
      OPrice: 3.99,
      PPrice: 2.84,
      CPrice: 4.74,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-heros-revenge/summon-limit?xid=i2b4efe5d85db416892ba0c4d59c8f544",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 132,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/174832_200w.jpg",
      Name: "Heavymetalfoes Electrumite",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "MP18",
      Owned: 1,
      OPrice: 3.99,
      PPrice: 3.54,
      CPrice: 3.3,
      Projection: 6.3 - 6.3,
      URL:
        "2018-mega-tins-mega-pack/heavymetalfoes-electrumite?xid=i7fa2bdac5aa643cb84a1e83a8dbabb56",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 133,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/81647_200w.jpg",
      Name: "Dragonecro Nethersoul Dragon",
      Rarity: "Gold",
      Edition: "1st Edition",
      Pack: "PGLD",
      Owned: 1,
      OPrice: 3.99,
      PPrice: 3.19,
      CPrice: 3.86,
      Projection: 6.3 - 6.3,
      URL:
        "premium-gold/dragonecro-nethersoul-dragon?xid=i76e1a443a31b4e99b6183e066e1baf52",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 134,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/166354_200w.jpg",
      Name: "Knightmare Phoenix",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "FLOD",
      Owned: 1,
      OPrice: 3.99,
      PPrice: 3.91,
      CPrice: 4.41,
      Projection: 6.3 - 6.3,
      URL:
        "flames-of-destruction/knightmare-phoenix?xid=id7f688dd314d44cd9be7b174ca2db4b4",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 135,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/33688_200w.jpg",
      Name: "Fortune's Future",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "SOVR",
      Owned: 1,
      OPrice: 3.99,
      PPrice: 3.74,
      CPrice: 3.24,
      Projection: 6.3 - 6.3,
      URL:
        "stardust-overdrive/fortunes-future?xid=icd942f5305a44103b21e0167974da831",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 136,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/158091_200w.jpg",
      Name: "Mythical Beast Jackal King",
      Rarity: "Ultra",
      Edition: "Unlimited",
      Pack: "EXFO",
      Owned: 1,
      OPrice: 3.99,
      PPrice: 2.95,
      CPrice: 3.96,
      Projection: 6.3 - 6.3,
      URL:
        "extreme-force/mythical-beast-jackal-king?xid=id4cd6a55f432440997dcd3143719fa1b",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 137,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/0_200w.jpg",
      Name: "Micro Coder",
      Rarity: "Ultra",
      Edition: "PROMO",
      Pack: "LOD2",
      Owned: 1,
      OPrice: 13.99,
      PPrice: 19.3,
      CPrice: 20.45,
      Projection: 6.3 - 6.3,
      URL:
        "yu-gi-oh-video-game-promotional-cards/micro-coder?xid=ac8ee0ca4140a344ddb8d74f0bdd650e6d",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 138,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/35072_200w.jpg",
      Name: "XYZ-Dragon Cannon",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "DPKB",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.27,
      CPrice: 0.27,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-pack-kaiba/xyz-dragon-cannon?xid=pi497b0dc1-a1e3-4ab7-ab82-16367400b376",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 139,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/35054_200w.jpg",
      Name: "X-Head Cannon",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "DPKB",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-pack-kaiba/x-head-cannon?xid=pi894dc6fd-2c22-4798-976d-15269d9c04d8",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 140,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125272_200w.jpg",
      Name: "Abyss Actor - Evil Heel",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "DESO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.69,
      CPrice: 0.69,
      Projection: 6.3 - 6.3,
      URL: "destiny-soldiers/abyss%20actor%20evil%20heel",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 141,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177184_200w.jpg",
      Name: "Abyss Actor - Superstar",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.09,
      CPrice: 0.09,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss-actor-superstar?xid=pide0d1485-2f87-4c89-86c8-de05f6db6fdc",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 142,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177180_200w.jpg",
      Name: "Abyss Actor - Mellow Madonna",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.55,
      CPrice: 0.55,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss%20actor%20mellow%20madonna",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 143,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125275_200w.jpg",
      Name: "Abyss Actor - Sassy Rookie",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.25,
      CPrice: 0.25,
      Projection: 6.3 - 6.3,
      URL: "destiny-soldiers/abyss%20actor%20sassy%20rookie",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 144,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177181_200w.jpg",
      Name: "Abyss Actor - Comic Relief",
      Rarity: "Rare",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.14,
      CPrice: 0.14,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss%20actor%20comic%20relief",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 145,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177186_200w.jpg",
      Name: "Abyss Actor - Trendy Understudy",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.08,
      CPrice: 0.08,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss-actor-trendy-understudy?xid=piad8d3442-df2e-4daa-8b28-fa7ad3852263",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 146,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/139269_200w.jpg",
      Name: "Abyss Actor - Trendy Understudy",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.15,
      CPrice: 0.15,
      Projection: 6.3 - 6.3,
      URL:
        "code-of-the-duelist/abyss-actor-trendy-understudy?xid=pic57dcb40-6534-4d2e-a336-701a43e180d3",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 147,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125273_200w.jpg",
      Name: "Abyss Actor - Funky Comedian",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "DESO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.16,
      CPrice: 0.16,
      Projection: 6.3 - 6.3,
      URL: "destiny-soldiers/abyss%20actor%20funky%20comedian",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 148,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125282_200w.jpg",
      Name: "Abyss Prop - Wild Wagon",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "DESO",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.15,
      CPrice: 0.15,
      Projection: 6.3 - 6.3,
      URL: "abyss-prop-wild-wagon?xid=pia67c55ff-b350-437b-af21-c6d202c440ad",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 149,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177187_200w.jpg",
      Name: "Abyss Script - Opening Ceremony",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.06,
      CPrice: 0.06,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss-script-opening-ceremony?xid=pi3e1d0a00-4acb-4fb2-83ee-762b7fa00d72",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 150,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125280_200w.jpg",
      Name: "Abyss Script - Opening Ceremony",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "DESO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.18,
      CPrice: 0.18,
      Projection: 6.3 - 6.3,
      URL:
        "destiny-soldiers/abyss-script-opening-ceremony?xid=pib94b39d6-4fa8-4a32-b743-348762098dbb",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 151,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177183_200w.jpg",
      Name: "Abyss Playhouse - Fantastic Theater",
      Rarity: "Rare",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.1,
      CPrice: 0.1,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss%20playhouse%20fantastic%20theater",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 152,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125283_200w.jpg",
      Name: "Abyss Script - Rise Of The Abyss King",
      Rarity: "Secret",
      Edition: "1st Edition",
      Pack: "DESO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.41,
      CPrice: 0.41,
      Projection: 6.3 - 6.3,
      URL:
        "destiny-soldiers/abyss-script-rise-of-the-abyss-king?xid=pi049e0e5f-490b-4b7f-a096-16c25118896d",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 153,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125279_200w.jpg",
      Name: "Abyss Script - Fantasy Magic",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "DESO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.13,
      CPrice: 0.13,
      Projection: 6.3 - 6.3,
      URL: "destiny-soldiers/abyss%20script%20fantasy%20magic",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 154,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125281_200w.jpg",
      Name: "Abyss Script - Fire Dragon's Lair",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "DESO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.16,
      CPrice: 0.16,
      Projection: 6.3 - 6.3,
      URL: "destiny-soldiers/abyss%20script%20fire%20dragons%20lair",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 155,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/136802_200w.jpg",
      Name: "Abyss Script - Abysstainment",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLLR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.21,
      CPrice: 0.21,
      Projection: 6.3 - 6.3,
      URL: "battles-of-legend-lights-revenge/abyss%20script%20abysstainment",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 156,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177182_200w.jpg",
      Name: "Abyss Script - Romantic Terror",
      Rarity: "Rare",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.12,
      CPrice: 0.12,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss%20script%20romantic%20terror",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 157,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/125284_200w.jpg",
      Name: "Abyss Actors Back Stage",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "DESO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.18,
      CPrice: 0.18,
      Projection: 6.3 - 6.3,
      URL:
        "destiny-soldiers/abyss-actors-back-stage?xid=pi842c6afe-a44e-497c-8fa8-f82f1a551b4a",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 158,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177188_200w.jpg",
      Name: "Abyss Actors Back Stage",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.09,
      CPrice: 0.09,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss-actors-back-stage?xid=pibf39faf1-22a0-45f8-bca5-44d2203c7a82",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 159,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/177177_200w.jpg",
      Name: "Abyss Actors' Curtain Call",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "LED3",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL:
        "legendary-duelists-white-dragon-abyss/abyss-actors-curtain-call?xid=pi5bd394f5-42ff-42be-a2ff-8e6424423c8e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 160,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/158111_200w.jpg",
      Name: "Altergeist Hexstia",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "EXFO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.19,
      CPrice: 0.19,
      Projection: 6.3 - 6.3,
      URL:
        "extreme-force/altergeist-hexstia?xid=pi4894e323-0083-42b6-9201-e28978796cb7",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 161,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/166350_200w.jpg",
      Name: "Altergeist Kidolga",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "FLOD",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL:
        "flames-of-destruction/altergeist-kidolga?xid=pida90979e-f096-46a8-b096-c26ae6a0f233",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 162,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/189388_200w.jpg",
      Name: "Altergeist Dragvirion",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "DANE",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL: "dark-neostorm/altergeist%20dragvirion",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 163,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148296_200w.jpg",
      Name: "Altergeist Kunquery",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "CIBR",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.17,
      CPrice: 0.17,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/altergeist-kunquery?xid=pid357c28a-0083-455f-8d19-e4e92f9f0dc1",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 164,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148293_200w.jpg",
      Name: "Altergeist Marionetter",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "CIBR",
      Owned: 3,
      OPrice: 5,
      PPrice: 1.64,
      CPrice: 1.64,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/altergeist-marionetter?xid=pifa21ed08-063d-4795-ac2d-41996336e1ca",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 165,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/189359_200w.jpg",
      Name: "Altergeist Fifinellag",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "DANE",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.12,
      CPrice: 0.12,
      Projection: 6.3 - 6.3,
      URL: "dark-neostorm/altergeist%20fifinellag",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 166,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/164030_200w.jpg",
      Name: "Altergeist Silquitous",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "SP18",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.24,
      CPrice: 0.24,
      Projection: 6.3 - 6.3,
      URL:
        "star-pack-vrains/altergeist-silquitous?xid=pi789dfd1e-b481-4c5d-b048-3036b21692f4",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 167,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/166323_200w.jpg",
      Name: "Altergeist Pixiel",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "FLOD",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL:
        "flames-of-destruction/altergeist-pixiel?xid=pi8d989b5a-4488-439f-9799-74d0d5ec8725",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 168,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/169456_200w.jpg",
      Name: "Altergeist Manifestation",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLRR",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.2,
      CPrice: 0.2,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-relentless-revenge/altergeist-manifestation?xid=pi01082ebf-a89d-4c81-ab59-01de65ecc079",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 169,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/166378_200w.jpg",
      Name: "Altergeist Emulatelf",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "FLOD",
      Owned: 3,
      OPrice: 5,
      PPrice: 0.09,
      CPrice: 0.09,
      Projection: 6.3 - 6.3,
      URL:
        "flames-of-destruction/altergeist-emulatelf?xid=pifb2c4414-80cd-4cf6-8ee9-3a3bfb57c7de",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 170,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/189423_200w.jpg",
      Name: "Altergeist Haunted Rock",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "DANE",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.13,
      CPrice: 0.13,
      Projection: 6.3 - 6.3,
      URL: "dark-neostorm/altergeist%20haunted%20rock",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 171,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148371_200w.jpg",
      Name: "Altergeist Protocol",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "CIBR",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.34,
      CPrice: 0.34,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/altergeist-protocol?xid=pi026a60ce-6fb4-4a4b-b174-8684eeea3a3f",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 172,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148372_200w.jpg",
      Name: "Personal Spoofing",
      Rarity: "Rare",
      Edition: "Unlimited",
      Pack: "CIBR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.57,
      CPrice: 0.57,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/personal-spoofing?xid=pidc11c4e2-3d32-4d47-beaa-0be57b6f781b",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 173,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148401_200w.jpg",
      Name: "Amazoness Empress",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "CIBR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.09,
      CPrice: 0.09,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/amazoness-empress?xid=pid4f418bc-89fd-4b7d-b8b5-76893083847d",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 174,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/175000_200w.jpg",
      Name: "Amazoness Empress",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "MP18",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.15,
      CPrice: 0.15,
      Projection: 6.3 - 6.3,
      URL:
        "2018-mega-tins-mega-pack/amazoness-empress?xid=pia31f1f46-c7e7-41c2-9791-48935d63698c",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 175,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148400_200w.jpg",
      Name: "Amazoness Pet Liger",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "CIBR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.07,
      CPrice: 0.07,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/amazoness-pet-liger?xid=pi53176f31-e32a-4001-a59a-71331c74a831",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 176,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/148399_200w.jpg",
      Name: "Amazoness Spy",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "CIBR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL:
        "circuit-break/amazoness-spy?xid=pid43b56b5-9729-42aa-a428-8b6560e7f28e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 177,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/174966_200w.jpg",
      Name: "Ancient Gear Golem - Ultimate Pound",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "MP18",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.09,
      CPrice: 0.09,
      Projection: 6.3 - 6.3,
      URL:
        "2018-mega-tins-mega-pack/ancient-gear-golem-ultimate-pound?xid=pie844eb98-b763-4aa6-bad3-97b507e67afa",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 178,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/165470_200w.jpg",
      Name: "Archfiend Emperor, The First Lord Of Horror",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "SR06",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.13,
      CPrice: 0.13,
      Projection: 6.3 - 6.3,
      URL:
        "structure-deck-lair-of-darkness/archfiend-emperor-the-first-lord-of-horror?xid=pi6b0e2e10-902f-4251-876d-5f59079030a1",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 179,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/32968_200w.jpg",
      Name: "Summoned Skull",
      Rarity: "Super",
      Edition: "Unlimited",
      Pack: "DPYG",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.81,
      CPrice: 0.81,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-pack-yugi/summoned-skull?xid=pi04a6b565-40db-4ea0-b04e-b331facc5a20",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 180,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/107667_200w.jpg",
      Name: "Skilled Red Magician",
      Rarity: "Rare",
      Edition: "1st Edition",
      Pack: "DOCS",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.19,
      CPrice: 0.19,
      Projection: 6.3 - 6.3,
      URL: "dimension-of-chaos/skilled%20red%20magician",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 181,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/165478_200w.jpg",
      Name: "Archfiend Cavalry",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "SR06",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.13,
      CPrice: 0.13,
      Projection: 6.3 - 6.3,
      URL:
        "structure-deck-lair-of-darkness/archfiend-cavalry?xid=pi119bd907-6f70-4b86-b87e-1ce58906e2ed",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 182,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/22910_200w.jpg",
      Name: "Archfiend's Oath",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "DCR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.18,
      CPrice: 0.18,
      Projection: 6.3 - 6.3,
      URL:
        "dark-crisis/archfiends-oath?xid=pi4358409d-52a8-4211-8545-749ed9c098f4",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 183,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/38606_200w.jpg",
      Name: "Karakuri Klock",
      Rarity: "Super",
      Edition: "1st Edition",
      Pack: "STBL",
      Owned: 1,
      OPrice: 5,
      PPrice: 3.99,
      CPrice: 3.99,
      Projection: 6.3 - 6.3,
      URL: "starstrike-blast/karakuri%20klock",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 184,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/102449_200w.jpg",
      Name: "Aromage Cananga",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "CORE",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.34,
      CPrice: 0.34,
      Projection: 6.3 - 6.3,
      URL:
        "clash-of-rebellions/aromage-cananga?xid=pie37649ba-ad3a-4137-8a9e-5320d4cb7bdb",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 185,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/82657_200w.jpg",
      Name: "Artifact Labrys",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "PRIO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL:
        "primal-origin/artifact-labrys?xid=pi7678bb8b-be09-439b-9157-2356779ac13e",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 186,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/193665_200w.jpg",
      Name: "Artifact Scythe",
      Rarity: "Ultra",
      Edition: "1st Edition",
      Pack: "BLHR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.97,
      CPrice: 0.97,
      Projection: 6.3 - 6.3,
      URL:
        "battles-of-legend-heros-revenge/artifact-scythe?xid=pi3b1c7ee8-cadc-44d5-b9e0-fda38edf003a",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 187,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/92358_200w.jpg",
      Name: "Artifact Lancea",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "DUEA",
      Owned: 2,
      OPrice: 5,
      PPrice: 0.45,
      CPrice: 0.45,
      Projection: 6.3 - 6.3,
      URL:
        "duelist-alliance/artifact-lancea?xid=pi941a7f0a-d211-492b-af2c-f82daf5127b1",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 188,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/131211_200w.jpg",
      Name: "Artifact Vajra",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "MACR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.13,
      CPrice: 0.13,
      Projection: 6.3 - 6.3,
      URL:
        "maximum-crisis/artifact-vajra?xid=pi1427a8ee-723c-4ac0-8f46-a5a369e26523",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 189,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/131211_200w.jpg",
      Name: "Artifact Vajra",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "MACR",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.13,
      CPrice: 0.13,
      Projection: 6.3 - 6.3,
      URL:
        "maximum-crisis/artifact-vajra?xid=pi1427a8ee-723c-4ac0-8f46-a5a369e26523",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 190,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/158093_200w.jpg",
      Name: "Artifact Mjollnir",
      Rarity: "Common",
      Edition: "Unlimited",
      Pack: "EXFO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL:
        "extreme-force/artifact-mjollnir?xid=pif352b95f-56e7-4d70-8ad7-867b6c3d1649",
      Change: 0,
      Location: "Trunk"
    },
    {
      Id: 191,
      Icon:
        "https://6d4be195623157e28848-7697ece4918e0a73861de0eb37d08968.ssl.cf1.rackcdn.com/158093_200w.jpg",
      Name: "Artifact Mjollnir",
      Rarity: "Common",
      Edition: "1st Edition",
      Pack: "EXFO",
      Owned: 1,
      OPrice: 5,
      PPrice: 0.11,
      CPrice: 0.11,
      Projection: 6.3 - 6.3,
      URL:
        "extreme-force/artifact-mjollnir?xid=pif352b95f-56e7-4d70-8ad7-867b6c3d1649",
      Change: 0,
      Location: "Trunk"
    }
  ];

  controls: FormArray;

  ngOnInit() {
    this.currentSort = "";
    this.setFilteredItems();
    this.changeProjections(this.yugiohDatabase);
    this.changePercent(this.yugiohDatabase);
    this.checkLocation(this.yugiohDatabase);

    const toGroups = this.cards.map(Card => {
      return new FormGroup({
        Icon: new FormControl(Card.Icon),
        Name: new FormControl(Card.Name),
        Rarity: new FormControl(Card.Rarity),
        Edition: new FormControl(Card.Edition),
        Pack: new FormControl(Card.Pack),
        Owned: new FormControl(Card.Owned),
        OPrice: new FormControl(Card.OPrice),
        PPrice: new FormControl(Card.PPrice),
        CPrice: new FormControl(Card.CPrice),
        Projection: new FormControl(Card.Projection),
        URL: new FormControl(Card.URL),
        Change: new FormControl(Card.Change),
        Location: new FormControl(Card.Location)
      });
    });
    this.controls = new FormArray(toGroups);
  }



  getControl(index: number, field: string): FormControl {
    return this.controls.at(index)[field];
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/Yugioh', JSON.stringify(item)]);
  // }

  changeProjections(list) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].PPrice < list[index].OPrice) {
        list[index].Projection = list[index].CPrice - list[index].PPrice;
      } else {
        list[index].Projection = list[index].CPrice - list[index].OPrice;
      }
    }
  }

  setFilteredItems() {
    this.yugiohDatabase = this.dataService.filterYugiohDatabase(
      this.searchTerm
    );
  }

  //   ionViewDidLoad() {

  //     this.setFilteredItems();

  //     this.searchControl.valueChanges.debounceTime(700).subscribe(search => {

  //         this.searching = false;
  //         this.setFilteredItems();

  //     });

  // }

  onSearchInput() {
    this.searching = true;
  }

  fullUpdate() {
    for (let index = 0; index < this.yugiohDatabase.length; index++) {
      this.yugiohDatabase[index].PPrice = this.yugiohDatabase[index].CPrice;
      var newPrice = prompt(
        "Input the new price for " +
          this.yugiohDatabase[index].Name +
          " Rarity: " +
          this.yugiohDatabase[index].Rarity +
          " From: " +
          this.yugiohDatabase[index].Pack
      );

      if (newPrice != null) {
        this.yugiohDatabase[index].CPrice = newPrice;

        // --- Try to replace the real values with new values in code ---
      }
      if (newPrice == null) {
        break;
      }
    }
  }

  changePercent(list) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].OPrice < list[index].CPrice) {
        list[index].Change = list[index].Projection / list[index].CPrice;
      } else {
        list[index].Change = list[index].Projection / list[index].CPrice;
      }
    }
  }

  dynamicSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchId");
    filter = input.value.toUpperCase();
    table = document.getElementById("binderList");
    tr = table.getElementsByTagName("tr")[1];
    alert(table.length);
    // alert(tr.getElementsByTagName('td')[0].var)
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr.getElementsByTagName("td")[0];
      alert("td is " + td);
      if (td) {
        alert("td is " + td);
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          alert("td is " + td);
          tr[i].style.display = "none";
        }
      }
    }
  }

  checkLocation(list) {
    for (let index = 0; index < list.length; index++) {
      if (list[index].CPrice >= 5) {
        list[index].Location = "Binder";
      } else if (1.5 < list[index].CPrice && list[index].CPrice < 5) {
        list[index].Location = "Bait";
      }
    }
  }

  checkSite() {
    alert("This works");
    this.router.navigate(["https://yugiohprices.com/"]);
  }

  GetSortOrderAsc(prop) {
    return function(a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  GetSortOrderDesc(prop) {
    return function(a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  nameSortAsc() {
    this.currentSort = this.GetSortOrderAsc(
      this.yugiohDatabase.sort(this.GetSortOrderAsc("Name"))
    );
  }

  nameSortDesc() {
    this.currentSort = this.GetSortOrderDesc(
      this.yugiohDatabase.sort(this.GetSortOrderDesc("Name"))
    );
  }

  priceSortAsc() {
    this.currentSort = this.GetSortOrderAsc(
      this.yugiohDatabase.sort(this.GetSortOrderAsc("CPrice"))
    );
  }

  priceSortDesc() {
    this.currentSort = this.GetSortOrderDesc(
      this.yugiohDatabase.sort(this.GetSortOrderDesc("CPrice"))
    );
  }

  changeSortAsc() {
    this.currentSort = this.GetSortOrderAsc(
      this.yugiohDatabase.sort(this.GetSortOrderAsc("Change"))
    );
  }

  changeSortDesc() {
    this.currentSort = this.GetSortOrderDesc(
      this.yugiohDatabase.sort(this.GetSortOrderDesc("Change"))
    );
  }
}
