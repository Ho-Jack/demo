{
  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver; // （类型别名常用于联合类型）
  function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
      return n;
    } else {
      return n();
    }
  }
  getName(() => "AA");
}
