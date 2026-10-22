import type { User } from "@/types";
import { delay } from "./delay";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { usuariosMock } from "./mocks/usuarios";
import { LoginDTO, validateLoginDTO, mapUserDocumentToEntity } from "@/types/dtos";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
const DOMINIO_INSTITUCIONAL = "fatec.sp.gov.br";

export function isEmailInstitucional(email: string): boolean {
  return email.trim().toLowerCase().endsWith(`@${DOMINIO_INSTITUCIONAL}`);
}

export async function entrar(loginData: LoginDTO): Promise<User> {
  validateLoginDTO(loginData);
  const emailNormalizado = loginData.email.trim().toLowerCase();

  if (!auth || !db) {
    await delay();
    return (
      usuariosMock.find((u) => u.email.toLowerCase() === emailNormalizado) ??
      usuariosMock[0]
    );
  }

  const userCredential = await signInWithEmailAndPassword(
    auth,
    emailNormalizado,
    loginData.senha
  );

  const uid = userCredential.user.uid;

  const userDocRef = doc(db, "users", uid);
  const userDoc = await getDoc(userDocRef);

  if (!userDoc.exists()) {
    throw new Error("Perfil de usuário não encontrado no Firestore.");
  }

  return mapUserDocumentToEntity(uid, userDoc.data());
}

export async function deslogar(): Promise<void> {
  if (!auth) {
    await delay(150);
    return;
  }
  await signOut(auth);
}
