import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/services/firebase";

export async function rodarSeedsUsuarios(): Promise<string> {
  const usuariosTeste = [
    {
      email: "estudante@fatec.sp.gov.br",
      senha: "123456",
      docData: {
        nome: "João Silva",
        email: "estudante@fatec.sp.gov.br",
        tipoUsuario: "estudante",
        unidade: "Fatec Itaquera",
        curso: "Desenvolvimento de Software Multiplataforma",
        semestre: 3,
        turno: "Noturno",
      },
    },
    {
      email: "professor@fatec.sp.gov.br",
      senha: "123456",
      docData: {
        nome: "Prof. Carlos Andrade",
        email: "professor@fatec.sp.gov.br",
        tipoUsuario: "professor",
        unidade: "Fatec Itaquera",
        turmas: ["3º DSM", "4º DSM"],
      },
    },
    {
      email: "coordenador@fatec.sp.gov.br",
      senha: "123456",
      docData: {
        nome: "Profa. Mariana Lopes",
        email: "coordenador@fatec.sp.gov.br",
        tipoUsuario: "coordenador",
        unidade: "Fatec Itaquera",
        cursoCoordenado: "Desenvolvimento de Software Multiplataforma",
      },
    },
  ];

  const logs: string[] = [];

  for (const user of usuariosTeste) {
    try {
      // 1. Tenta criar o utilizador no Firebase Auth
      if(!db||!auth){throw new Error("Erro na autenticação ou na base de dados, tente novamente")}
      const res = await createUserWithEmailAndPassword(auth, user.email, user.senha);
      await setDoc(doc(db, "users", res.user.uid), user.docData);
      logs.push(`✅ ${user.email} criado com sucesso!`);
    } catch (error: any) {
        if (error.code === "auth/email-already-in-use") {
        try {
        if(!db||!auth){throw new Error("Erro na autenticação ou na base de dados, tente novamente")}
          const res = await signInWithEmailAndPassword(auth, user.email, user.senha);
          await setDoc(doc(db, "users", res.user.uid), user.docData);
          logs.push(`${user.email} já existia no Auth. Perfil atualizado no Firestore!`);
        } catch (loginError: any) {
          logs.push(`${user.email} já existe no Auth (Senha incorreta ou erro no perfil).`);
        }
      } else {
        logs.push(`❌ Erro ao criar ${user.email}: ${error.message}`);
      }
    }
  }

  return logs.join("\n");
}