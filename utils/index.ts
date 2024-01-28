import {IComplex} from "../common/types";

export const findHouseById = (complexes: IComplex[], houseId: number) => {
    for (const complex of complexes) {
        for (const house of complex.houses) {
            if (house.id === houseId) {
                return house;
            }
        }
    }
    return null;
}