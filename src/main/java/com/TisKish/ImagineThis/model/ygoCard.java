package com.TisKish.ImagineThis.model;

import javax.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "ygoCardDatabase")
public class ygoCard {
    @Id
    private Integer id;
    private String name;
    private String icon;
    private String rarity;
    private String edition;
    private String detail;
    private String pack;
    private Integer owned;
    private float oPrice;
    private float pPrice;
    private float cPrice;
    private float projection;
    private String url;
    private float change;
    private String location;

    public ygoCard() {

    }

    public ygoCard( String name, String icon, String rarity, String detail, String edition, String pack, 
    Integer owned, Float oPrice, Float pPrice, Float cPrice, Float projection, String url,
    Float change, String location) {
        this.name = name;
        this.icon = icon;
        this.rarity = rarity;
        this.edition = edition;
        this.detail = detail;
        this.pack = pack;
        this.owned = owned;
        this.oPrice = oPrice;
        this.pPrice = pPrice;
        this.cPrice = cPrice;
        this.projection = projection;
        this.url = url;
        this.change = change;
        this.location = location;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getIcon() {
        return icon;
    }

    public String getDetail() {
        return detail;
    }

    public String getRarity() {
        return rarity;
    }

    public String getEdition() {
        return edition;
    }

    public String getPack() {
        return pack;
    }

    public Integer getOwned() {
        return owned;
    }

    public float getOPrice() {
        return oPrice;
    }

    public float getPPrice() {
        return pPrice;
    }

    public float getCPrice() {
        return cPrice;
    }

    public float getProjection() {
        return projection;
    }

    public String getUrl() {
        return url;
    }

    public float getChange() {
        return change;
    }

    public String getLocation() {
        return location;
    }

public void setName(String name) {
    this.name = name;
}

public void setIcon(String icon) {
    this.icon = icon;
}

public void setRarity(String rarity) {
    this.rarity = rarity;
}

public void setEdition(String edition) {
    this.edition = edition;
}

public void setDetail(String detail) {
    this.detail = detail;
}

public void setPack(String pack) {
    this.pack = pack;
}

public void setOwned(Integer owned) {
    this.owned = owned;
}

public void setOPrice(Float oPrice) {
    this.oPrice = oPrice;
}

public void setPPrice(Float pPrice) {
    this.pPrice = pPrice;
}

public void setCPrice(Float cPrice) {
    this.cPrice = cPrice;
}

public void setProjection(Float projection) {
    this.projection = projection;
}

public void setUrl(String url) {
    this.url = url;
}

public void setChange(Float change) {
    this.change = change;
}

public void setLocation (String location) {
    this.location = location;
}

@Override
public String toString() {
    return "ygoCard{"
    + "id="
    + id
    + ", name='"
    + name
    + '\''
    + ", icon='"
    + icon
    + '\''
    + ", rarity='"
    + rarity
    + '\''
    + ", edition='"
    + edition
    + '\''
    + ", pack='"
    + pack
    + '\''
    + ", owned='"
    + owned
    + '\''
    + ", oPrice='"
    + oPrice
    + '\''
    + ", pPrice='"
    + pPrice
    + '\''
    + ", cPrice='"
    + cPrice
    + '\''
    + ", projection='"
    + projection
    + '\''
    + ", url='"
    + url
    + '\''
    + ", change='"
    + change
    + '\''
    + ", location='"
    + location
    + '}';
}
}
