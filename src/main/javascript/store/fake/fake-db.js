/**
 * @author hasan
 * Created at 20.03.2016.
 */
import faker from 'faker/locale/tr';

export default {
    birimler: birimler,
    altbirimler: altbirimler,
    personel: personel
}

function birimler(size) {
    var birimler = [];
    for (var i = 0; i < size; i++) {
        birimler.push(faker.company.companyName());
    }

    return birimler;
}

function altbirimler(size) {
    var birimler = [];
    for (var i = 0; i < size; i++) {
        var birim = {
            ad: faker.company.companyName(),
            sorumlu: faker.name.findName(),
            tel: faker.phone.phoneNumber(),
            oda: faker.random.number({min: 100, max: 500})
        };
        birimler.push(birim);
    }

    return birimler;
}

function personel(size) {
    var personel = [];
    for (var i = 0; i < size; i++) {
        var birim = {
            ad: faker.name.findName(),
            tel: faker.phone.phoneNumber(),
            oda: faker.random.number({min: 100, max: 500})
        };
        personel.push(faker.company.companyName());
    }

    return personel;
}