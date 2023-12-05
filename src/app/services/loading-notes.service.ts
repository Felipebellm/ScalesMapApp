import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoadingNotesService {

  // NOTES
  notesC: any[] = [];
  notesC2: any[] = [];
  notesDb: any[] = [];
  notesD: any[] = [];
  notesD2: any[] = [];
  notesEb: any[] = [];
  notesE: any[] = [];
  notesF: any[] = [];
  notesF2: any[] = [];
  notesGb: any[] = [];
  notesG: any[] = [];
  notesG2: any[] = [];
  notesAb: any[] = [];
  notesA: any[] = [];
  notesA2: any[] = [];
  notesBb: any[] = [];
  notesB: any[] = [];

  scales: { 
    key: string; 
    major: { note: string; targets: any[] }[]; 
    minor : { note: string; targets: any[] }[] 
  }[] = [];
  
  constructor () {}
  targeting(fretboard: any[]) {

    fretboard[0].C.forEach((element: any[]) => {
      this.notesC.push(element);
    });
    fretboard[0].CDb.forEach((element: any[]) => {
      this.notesC2.push(element);
      this.notesDb.push(element);
    });
    fretboard[0].D.forEach((element: any[]) => {
      this.notesD.push(element);
    });
    fretboard[0].DEb.forEach((element: any[]) => {
      this.notesD2.push(element);
      this.notesEb.push(element);
    });
    fretboard[0].E.forEach((element: any[]) => {
      this.notesE.push(element);
    });
    fretboard[0].F.forEach((element: any[]) => {
      this.notesF.push(element);
    });
    fretboard[0].FGb.forEach((element: any[]) => {
      this.notesF2.push(element);
      this.notesGb.push(element);
    });
    fretboard[0].G.forEach((element: any[]) => {
      this.notesG.push(element);
    });  
    fretboard[0].GAb.forEach((element: any[]) => {
      this.notesG2.push(element);
      this.notesAb.push(element);
    });
    fretboard[0].A.forEach((element: any[]) => {
      this.notesA.push(element);
    });
    fretboard[0].ABb.forEach((element: any[]) => {
      this.notesA2.push(element);
      this.notesBb.push(element);
    });
    fretboard[0].B.forEach((element: any[]) => {
      this.notesB.push(element);
    });

    // Loading scales. by key
    let C = { key: 'C', major: [
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
    ], minor: [
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'Ab', targets: this.notesAb, },
      { note: 'Bb', targets: this.notesBb, },
    ] }
    this.scales.push(C);

    let C2 = { key: 'C2', major: [
      { note: 'C2', targets: this.notesC2, },
      { note: 'D2', targets: this.notesD2, },
      { note: 'F', targets: this.notesF, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
      { note: 'A2', targets: this.notesA2, },
      { note: 'C', targets: this.notesC, },
    ], minor: [
      { note: 'C2', targets: this.notesC2, },
      { note: 'D2', targets: this.notesD2, },
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
    ] }
    this.scales.push(C2);

    let Db = { key: 'Db', major: [
      { note: 'Db', targets: this.notesDb, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
      { note: 'Gb', targets: this.notesGb, },
      { note: 'Ab', targets: this.notesAb, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
    ], minor: [
      { note: 'Db', targets: this.notesDb, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'E', targets: this.notesE, },
      { note: 'Gb', targets: this.notesGb, },
      { note: 'Ab', targets: this.notesAb, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
    ] }
    this.scales.push(Db);

    let D = { key: 'D', major: [
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
    ], minor: [
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
    ] }
    this.scales.push(D);

    let D2 = { key: 'D2', major: [
      { note: 'D2', targets: this.notesD2, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'G2', targets: this.notesG2, },
      { note: 'A2', targets: this.notesA2, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
    ], minor: [
      { note: 'D2', targets: this.notesD2, },
      { note: 'F', targets: this.notesF, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
      { note: 'A2', targets: this.notesA2, },
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
    ] }
    this.scales.push(D2);

    let Eb = { key: 'Eb', major: [
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'Ab', targets: this.notesAb, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
    ], minor: [
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
      { note: 'Gb', targets: this.notesGb, },
      { note: 'Ab', targets: this.notesAb, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'B', targets: this.notesB, },
      { note: 'Db', targets: this.notesDb, },
    ] }
    this.scales.push(Eb);

    let E = { key: 'E', major: [
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D2', targets: this.notesD2, },
    ], minor: [
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
    ] }
    this.scales.push(E);

    let F = { key: 'F', major: [
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
    ], minor: [
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'Ab', targets: this.notesAb, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
      { note: 'Db', targets: this.notesDb, },
      { note: 'Eb', targets: this.notesEb, },
    ] }
    this.scales.push(F);

    let F2 = { key: 'F2', major: [
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
      { note: 'A2', targets: this.notesA2, },
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D2', targets: this.notesD2, },
      { note: 'F', targets: this.notesF, },
    ], minor: [
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
    ] }
    this.scales.push(F2);

    let Gb = { key: 'Gb', major: [
      { note: 'Gb', targets: this.notesGb, },
      { note: 'Ab', targets: this.notesAb, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'B', targets: this.notesB, },
      { note: 'Db', targets: this.notesDb, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
    ], minor: [
      { note: 'Gb', targets: this.notesGb, },
      { note: 'Ab', targets: this.notesAb, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
      { note: 'Db', targets: this.notesDb, },
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
    ] }
    this.scales.push(Gb);

    
    let G = { key: 'G', major: [
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
    ], minor: [
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
    ] }
    this.scales.push(G);

    let G2 = { key: 'G2', major: [
      { note: 'G2', targets: this.notesG2, },
      { note: 'A2', targets: this.notesA2, },
      { note: 'C', targets: this.notesC, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D2', targets: this.notesD2, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
    ], minor: [
      { note: 'G2', targets: this.notesG2, },
      { note: 'A2', targets: this.notesA2, },
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D2', targets: this.notesD2, },
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
    ] }
    this.scales.push(G2);

    let Ab = { key: 'Ab', major: [
      { note: 'Ab', targets: this.notesAb, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
      { note: 'Db', targets: this.notesDb, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
    ], minor: [
      { note: 'Ab', targets: this.notesAb, },
      { note: 'Bb', targets: this.notesBb, },
      { note: 'B', targets: this.notesB, },
      { note: 'Db', targets: this.notesDb, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'E', targets: this.notesE, },
      { note: 'Gb', targets: this.notesGb, },
    ] }
    this.scales.push(Ab);

    let A = { key: 'A', major: [
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
    ], minor: [
      { note: 'A', targets: this.notesA, },
      { note: 'B', targets: this.notesB, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
    ] }
    this.scales.push(A);

    let A2 = { key: 'A2', major: [
      { note: 'A2', targets: this.notesA2, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
      { note: 'D2', targets: this.notesD2, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
    ], minor: [
      { note: 'A2', targets: this.notesA2, },
      { note: 'C', targets: this.notesC, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D2', targets: this.notesD2, },
      { note: 'F', targets: this.notesF, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
    ] }
    this.scales.push(A2);

    let Bb = { key: 'Bb', major: [
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
      { note: 'D', targets: this.notesD, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
    ], minor: [
      { note: 'Bb', targets: this.notesBb, },
      { note: 'C', targets: this.notesC, },
      { note: 'Db', targets: this.notesDb, },
      { note: 'Eb', targets: this.notesEb, },
      { note: 'F', targets: this.notesF, },
      { note: 'Gb', targets: this.notesGb, },
      { note: 'Ab', targets: this.notesAb, },
    ] }
    this.scales.push(Bb);

    let B = { key: 'B', major: [
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D2', targets: this.notesD2, },
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G2', targets: this.notesG2, },
      { note: 'A2', targets: this.notesA2, },
    ], minor: [
      { note: 'B', targets: this.notesB, },
      { note: 'C2', targets: this.notesC2, },
      { note: 'D', targets: this.notesD, },
      { note: 'E', targets: this.notesE, },
      { note: 'F2', targets: this.notesF2, },
      { note: 'G', targets: this.notesG, },
      { note: 'A', targets: this.notesA, },
    ] }
    this.scales.push(B);

    return this.scales;
  
  }
  applyFilters(filter: any[], scales: any[]) {

    let targets: any[] = [];
    
    scales.forEach(groupNotes => {
      if (groupNotes.key === filter[1]) {
        switch (filter[0]) {
          case 'note':
            targets = [[groupNotes.major[0]], groupNotes.key];
            break;
          case 'major':
            targets = [groupNotes.major, groupNotes.key];
            break;
          case 'minor':
            targets = [groupNotes.minor, groupNotes.key];
            break;
          case 'minorPentatonic':
            // if (!filter[3]) {
              targets = [groupNotes.minor, groupNotes.key, [2,6]];
            // } else {
            //   let bluesNote = this.bluesNote(groupNotes.minor)
            // }
            break;
          case 'majorPentatonic':
            targets = [groupNotes.major, groupNotes.key, [4,7]];
            break;
          default:
            break;
        }
      }
    });

    return targets;
  }

  bluesNote(groupNotes: any[]) {
    debugger
  }
}
