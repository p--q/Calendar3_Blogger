var Animal = {  // ファクトリのプロトタイプ。
  create: function(type){  // 生成物のタイプを引数にしてメソッドを設定したオブジェクトを返す。
    var animal = Object.create(Animal.prototype);  // 自身のプロトタイプオブジェクトを入れる関数オブジェクトのprototypeプロパティ
    animal.type = type;
    return animal;
  },
  isAnimal: function(obj, type){
    if(!Animal.prototype.isPrototypeOf(obj)){
      return false;
    }
    return (type)?obj.type===type:true;
  },
  prototype: {}
};
var Dog = {
  create: function(name, breed){
    var dog = Object.create(Dog.prototype); 
    Object.assign(dog, Animal.create("dog"));
    dog.name = name;
    dog.breed = breed;
    dog.barking = "ruff, ruff";
    return dog;
  },
  isDog: function(obj){
    return Animal.isAnimal(obj, "dog");
  },
  prototype: {
    bark: function(){
      console.log(this.barking);
    },
    print: function(){
      console.log("The dog " + this.name + " is a " + this.breed);
    }
  }
};
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

var Cat = {
  create: function(name, breed){
    var cat = Object.create(Cat.prototype); 
    Object.assign(cat, Animal.create("cat"));
    cat.name = name;
    cat.breed = breed;
    return cat;
  },
  isCat: function(obj){
    return Animal.isAnimal(obj, "cat");
  },
  prototype: {}
};
Object.setPrototypeOf(Cat.prototype, Dog.prototype);
    
// 以下は図示のためのコード。
this.Animal = Animal;
this.Dog = Dog;
this.Cat = Cat;
var sparkie = Dog.create("Sparkie", "Border Collie");
this.sparkie = sparkie;
var tama = Cat.create("Tama", "mix");
this.tama = tama;