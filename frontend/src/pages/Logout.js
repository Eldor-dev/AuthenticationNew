import { redirect } from "react-router-dom";

export function action() {
  localStorage.setItem("token", "");
  localStorage.removeItem("expiration");
  return redirect("/");
}
