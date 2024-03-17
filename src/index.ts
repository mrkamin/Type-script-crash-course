function great(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola");
}
great(undefined);
