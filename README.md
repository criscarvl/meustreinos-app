# 🏋️‍♀️ Meus Treinos

Aplicativo web para cadastro, organização e execução de treinos personalizados. Permite o registro de exercícios com vídeos, montagem de treinos e ficha de treinos, execução com acompanhamento de séries, e controle de cargas utilizadas.

---

## 🚀 Tecnologias utilizadas

### Backend
- Java 17
- Spring Boot
- JPA / Hibernate
- H2 (desenvolvimento)
- Lombok

### Frontend
- Angular 17
- TypeScript
- RxJS
- HTML/CSS

---

## 🖼️ Funcionalidades já implementadas

- **📋 Exercício**
    - Nome, séries, repetições, descrição e vídeo
    - Upload de vídeo (armazenado na pasta `/videos`)
    - Listagem com preview do vídeo

- **🧾 Ficha de Treino**
    - Agrupamento de exercícios
    - Cada ficha pode conter múltiplos treinos

- **🏃‍♀️ Treino**
    - Associado a uma ficha
    - Composto por lista de exercícios ordenados

- **📈 Execução de Treino**
    - Tela passo a passo para o usuário registrar pesos utilizados por série
    - Vídeo do exercício embutido na execução
    - Persistência do histórico com pesos e data

---

## 💾 Como rodar localmente

### Backend

```bash
# Navegue até o projeto Spring
cd backend

# Rode a aplicação (pode ser via IntelliJ ou terminal)
./mvnw spring-boot:run
```

### 💻 Frontend

```bash
# Navegue até o frontend Angular
cd frontend

# Instale as dependências
npm install

# Rode o projeto
ng serve
```
Frontend estará disponível em: [http://localhost:4200](http://localhost:4200)

---

## 📦 Endpoints

| Método | Endpoint                | Descrição                      |
|--------|-------------------------|--------------------------------|
| POST   | `/api/exercicios`      | Cadastra exercício com vídeo   |
| GET    | `/api/exercicios`      | Lista todos os exercícios      |
| POST   | `/api/treino-execucao` | Salva execução de treino       |
| GET    | `/videos/{nomeArquivo}`| Acessa vídeo do exercício      |

---

🧠 *Projeto em desenvolvimento para organização de treinos pessoais e estudo de tecnologias modernas.*
