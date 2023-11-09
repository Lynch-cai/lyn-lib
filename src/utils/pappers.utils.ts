export class PappersUtils {
    static getCompanyInformationByName = async (q: string) => {
        try {
            const response = await fetch(`https://suggestions.pappers.fr/v2/?q=${q}&cibles=nom_entreprise`);
            const company = await response.json();
            return company;
        } catch (error) {
            return error;
        }
    };
    static getCompanyInformationBySiren = async (q: string) => {
        try {
            const response = await fetch(`https://suggestions.pappers.fr/v2/?q=${q}&cibles=siren,siret`);
            const company = await response.json();
            return company;
        } catch (error) {
            return error;
        }
    };
    static getCompanyInformationBySirenAndName = async (q: string) => {
        try {
            const response = await fetch(`https://suggestions.pappers.fr/v2/?q=${q}&cibles=siren,siret,nom_entreprise`);
            const company = await response.json();
            return company;
        } catch (error) {
            return error;
        }
    };
}
