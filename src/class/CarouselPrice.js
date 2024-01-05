const carouselPriceDAO = require("../models/carouselPriceDAO");

class CarouselPrice {
    constructor(price) {
        this.id             = price.id;
        this.description    = price.description;
        this.price          = price.price;
        this.active         = price.active;
        this.createdAt      = price.createdAt;
        this.updatedAt      = price.updatedAt;
    }

    getId = () => {
        return this.id;
    }

    getDescription = () => {
        return this.description;
    }

    setDescription = (description) => {
        this.description = description;
    }

    getPrice = () => {
        return this.price;
    }

    setPrice = (price) => {
        this.price = price;
    }

    getActive = () => {
        return this.active;
    }

    setActive = (active) => {
        this.active = active;
    }

    getCreateAt = () => {
        return this.createdAt;
    }

    getUpdatedAt = () => {
        return this.updatedAt;
    }

    save = async () => {

        let plainObject = Object.fromEntries(
            Object.entries(this).filter(([key, value]) => typeof value !== 'function')
        );

        delete plainObject.createdAt;
        delete plainObject.updatedAt;
        delete plainObject.id;

        return await carouselPriceDAO.saveDAO(plainObject);
    }

    update = async () => {
        let plainObject = Object.fromEntries(
            Object.entries(this).filter(([key, value]) => typeof value !== 'function')
        );

        delete plainObject.createdAt;
        delete plainObject.updatedAt;

        return await carouselPriceDAO.updateDAO(plainObject);
    }

    delete = async () => {
        return await carouselPriceDAO.deleteDAO(this.getId);
    }
}

module.exports = CarouselPrice;