## ☁️ **Aplicativo de Clima - JavaScript**

Um aplicativo de clima simples que consome a API do OpenWeatherMap para exibir informações meteorológicas de uma cidade especificada pelo usuário.

---

### 📌 **Funcionalidades**

✔ Busca de informações meteorológicas por cidade\
✔ Exibição da temperatura atual, máxima e mínima\
✔ Informação sobre umidade e velocidade do vento\
✔ Exibição de ícones meteorológicos\
✔ Mensagem de erro para cidades inválidas

---

### 🚀 **Tecnologias Utilizadas**

- HTML5
- CSS3
- JavaScript (ES6)
- API OpenWeatherMap

---

### 📞 **Configuração e Uso**

1. Clone este repositório:
   ```bash
   git clone https://github.com/Samuel-Nun3s/Projeto-Clima.git
   ```
2. Abra a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```
3. Crie um arquivo `config.js` na pasta `js/` e adicione sua **API Key**:
   ```js
   export const API_KEY = "SUA_API_KEY_AQUI";
   ```
4. Certifique-se de rodar o projeto em um servidor local para evitar erros de CORS, por exemplo:
   ```bash
   python -m http.server
   ```
5. Abra o `index.html` no navegador e pesquise uma cidade para visualizar o clima.

---

### 🛠 **Personalização**

- Para alterar o idioma da API, modifique o parâmetro `lang` na URL da API no arquivo `script.js`:
  ```js
  const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}&units=metric&lang=pt`;
  ```

---

### 🏆 **Contribuição**

Sinta-se à vontade para contribuir! Basta seguir estes passos:

1. Faça um **fork** do repositório.
2. Crie uma **branch**:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e **commite**:
   ```bash
   git commit -m "Adicionando nova funcionalidade"
   ```
4. Envie para o GitHub:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request** 🚀

---

### 📄 **Licença**

Este projeto está sob a licença MIT.

