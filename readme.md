# TypeScript

- Podemos dizer que o TypeScript é, em curtas linhas, um JavaScript com tipagem. 
- TypeScript não é compreendido pelo navegador web ou pelo node.

- A função do TypeScript é apenas na parte da produção, para encontrar erros antes deles acontecerem.
- Escrevemos o código em TypeScript, e o compilador de TypeScript transforma nosso código em JavaScript.

```javascript
function add(number1, number2) {
    return n1 + n2
}
```

A princípio a função está tudo ok, mas a partir do momento em que o `input` se torna uma `string`, vai ocorrer o famoso *unwanted behavior* (comportamento não desejado).

Vamos ver:

```javascript
// Código em JavaScript
function add(number1, number2) {
    return number1 + number2
}

const n1 = '5';
const n2 = 10;

console.log(add(n1, n2));

// OUTPUT > 510
```

O projeto não apresentou erro de compilação, mas não rodou do jeito que era esperado. `5 + 10` nunca vai ser `510`.

E é para isso que usamos o `TypeScript`.

Vejamos um exemplo:

```typescript
// Código em TypeScript

function add(number1: number, number2: number) {
    return number1 + number2;
}
```

Da pra notar que nos argumentos da função, foi colocado `: number` depois das variáveis. Isso é um recurso do TypeScript que não existe no JavaScript.

Caso eu passe qualquer variável que não seja do tipo `number`, o compilador de TypeScript vai me retornar um erro.

Exemplo: 

```typescript
// Código em TypeScript

function add(number1: number, number2: number) {
    return number1 + number2;
}

const n1 = '7';
const n2 = 10;

console.log(add(n1, n2));
```

Ao escrevermos o código acima, podemos tentar compilar ele para JavaScript rodando o seguinte comando: `tsc NomeDoArquivo.ts`

Após o comando, vai ser criado um arquivo com o mesmo nome mas com extensão JavaScript. No caso iria ser criado um arquivo chamado `NomeDoArquivo.js` na mesma pasta onde se encontra o arquivo TypeScript compilado.

#### Pera o arquivo foi compilado, então funcionou ?

Nope. O arquivo TS foi compilou e transformado para JavaScript, mas foi encontrado um erro na produção.

```powershell
app.ts:10:17 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

10 console.log(add(n1, n2));
                          ~~
Found 1 error.                          
```

Como dito anteriormente, deixamos explicito que o tipo do argumento teria que ser um `number`, e não uma `string` como foi passada.

Rodando o código com os tipos certos teríamos:

```typescript
// Código em TypeScript

function add(number1: number, number2: number) {
    return number1 + number2;
}

const n1 = 7;
const n2 = 10;

console.log(add(n1, n2));
```

Indo no terminal, digitando `tsc app.ts`, o arquivo app.js antigo seria sobrescrito com o novo app.js compilado. O arquivo seria exatamente assim.

```javascript
// Código em JavaScript
function add(number1, number2) {
    return number1 + number2;
}
var n1 = 7;
var n2 = 10;
console.log(add(n1, n2));

```

Nota-se que os tipos sumiram (`:number` nos argumentos da função) e as variáveis que eram declaradas com `const` agora estão com `var`.

1. Em relação ao `:number`, como já foi dito, é uma feature do próprio TypeScript. O JavaScript não suporta essas declarações. Então depois que `tsc app.ts` foi rodado, ele removeu as features que o JavaScript não suporta.
2. Em relação as declarações com `const` são configuráveis mais pra frente.

Então essa é a função principal do TypeScript, checar os tipos e nos avisar previamente quando pode ocorrer um bug

```typescript
let numero; // Variável do tipo any, ou seja pode ser qualquer coisa (string, number, boolean etc)
numero = '5'; // Tudo certo, pois foi declarado que a variavel number, apesar do nome pode ser qualquer coisa
```

Mas agora, veja este caso:

```typescript
let numero: number; // Variável do tipo number, ou seja só pode ser adicionado valores do tipo number.
numero = '5'; // Ao compilar, vai retornar um erro, informando que a variavel numero tem que ser do tipo number.
// Correto seria 'numero = 5;'
```

#### Tipos primitivos em TypeScript

`number`		1, 5.3, -10 (Todos os números, sem diferenciação entre int, float etc)

`string`		'Hi', "Hi", ´Hi´ (Todo tipo de texto, o ultimo é pra ser crase, não acento agudo)

`boolean`		true, false (Apenas esses dois, sem truthy ou falsy)

`object`		{age: 30} (Qualquer objeto JavaScript, tipos mais especificos são possiveis)

`array` 		[1, 2, 3] (No caso uma `array` de `number`s', mas pode ser de qualquer coisa)

### Objects

Em TypeScript, podemos especificar ainda mais os tipos de um objeto. Exemplo:

```typescript
const person: { // Deixando claro como as keys vão se comportar.
    name: string;
    age: number;
    alive: boolean;
} = {
    name: "Daniel",
    age: 21,
    alive: true
}
```

 ### Arrays

```typescript
// Declaração não tipada
const hobbies = ['Sports', 'Cooking'];

// Declaração tipada
const hobbies: string[] = ['Sports', 'Cooking'];
// Somente poderão ser adicionados textos à array

// Exemplo de erro
const texto: string[];
texto = ['monitor', 10];
							  ~~
```

Caso queira colocar elementos de tipos diferentes, use tipo `any`

```typescript
const hobbies: any[];
hobbies = ['BombaPatch', 2021]
// Declaração sem erros
```

Exemplo de inferring type (muito difícil traduzir isso aqui)

```typescript
const friends: string[] = [
    'cesar',
    'milena',
    'eduardo'
]

for(const friend of friends){
    console.log(friend);
}
```

Dentro do for, foi criado uma constante chamada `friend` , que automaticamente recebe o tipo `string`, pois foi declarado que a array `friends` seria uma array de strings.

OBS: na variável `friend`, podemos usar as funções básicas de string > `.toUpperCase( )` 

### Tuple

As `Tuples` são basicamente `arrays` com tipo e tamanho definidos.

```typescript
const person {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: "Daniel",
    age: 21,
    hobbies: ['football', 'csgo'],
    role: [2, 'yoink']
}
```

Em `role: [number, string]` deixando explicitado que queremos uma array com 2 elementos e com os tipos definidos. Sendo o `role[0]` sendo um `number` e `role[1]` sendo `string`.

OBS.: Se rodarmos `person.role.push('banger')`, infelizmente o TypeScript não consegue detectar esse erro.
Mas caso rodemos `person.role = ['av', 3]`, teremos um erro já que os tipos não batem.
Ou, se rodarmos `person.role[0] = 'world'`, também teremos um erro já que o tipo não bate.

### Enum

Basicamente criamos uma `Role` que serve como identificadores, segue abaixo como declarar.

```typescript
enum Role { ADMIN, USER, GUEST }
```

Por padrão, são atribuídos valores começando com 0 e incrementando de 1 em 1.

Você também pode atribuir valores para as `Roles`.
Mas é importante ressaltar que se você atribuir uma `string`, obrigatoriamente deverá atribuir valor para todas as roles.
Caso você atribua o valor 100 para a primeira `role`, a próxima será 101, 102 ...

```typescript
enum Role {ADMIN, USER, GUEST};
// ADMIN = 0, USER = 1, GUEST = 2

const person = {
    // ...
    role: Role.USER,
    // ...
}

if(person.role === Role.USER) {
    console.log('Usuário'); // Vai ser 'consolado'
}
```

