import UserModel from "../schema/user";

export async function createUser() {
  try {
    const newUser = new UserModel({
      name: "kim seong hawon",
      email: "abc@email.com",
      nickname: "tkdgjsJJang",
      username: "김상헌",
      _id: "1",
    });
    await newUser.save();

    console.log("User created successfully");
  } catch (error) {
    console.error(error);
  }
}
