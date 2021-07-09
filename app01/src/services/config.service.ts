import { Injectable } from "@angular/core";
import { BaseConfig } from "src/utility/config";
@Injectable({ providedIn: "root" })
export class ConfigService {


    getSettings() {
        return Promise.resolve(new BaseConfig());

    }


}