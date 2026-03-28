import { Counter3Service } from "./counter3.service";
import { Counter4Service } from "./counter4.service";
import { TestService } from "./test.service";

const fact = (testService: TestService) => 
    testService.serviceStatus ? new Counter3Service() : new Counter4Service();

export const counterFactory ={
    provide: Counter3Service, useFactory: fact, deps: [TestService]
}