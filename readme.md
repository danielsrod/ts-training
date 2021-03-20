# TypeScript

- TypeScript adiciona tipagem para o JavaScript. 
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

function add() {
    
}
```

