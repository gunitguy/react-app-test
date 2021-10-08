import {UserModel} from "./models/user-model";

export default class UserService {
    private static userMockData = {
        id: 1,
        name: "Bobo",
        surname: "Lala",
        email: "bobo@lala.com",
        displayName: "Lala Bobo"
    }

    public static async fetchUser(): Promise<UserModel> {
        return Promise.resolve(UserService.userMockData);
    }
}
