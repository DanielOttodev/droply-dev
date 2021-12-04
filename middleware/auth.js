export default function ({ store, redirect }) {
  console.log("in middleware...");
  console.log(store.state);
  if (!store.state.user) {
    redirect("/login");
  }
}
