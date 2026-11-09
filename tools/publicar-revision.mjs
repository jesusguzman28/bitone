// Revisión temporal (nov 2026): bitone.pe muestra una copia de bitwise.pe con
// mejoras, para que el dueño la apruebe antes de publicarla en bitwise.pe.
// La copia viene ya compilada en copia-revision/ (desde bitwise-new con
// PUBLIC_REVISION=1: todas las páginas llevan noindex y su canonical apunta a
// bitwise.pe). Este script la deja en dist/ para que el workflow la publique.
// Al terminar la revisión se revierte este commit y vuelve el mantenimiento.
import { cpSync, rmSync } from 'node:fs';
rmSync('dist', { recursive: true, force: true });
cpSync('copia-revision', 'dist', { recursive: true });
console.log('Copia de revisión lista en dist/');
