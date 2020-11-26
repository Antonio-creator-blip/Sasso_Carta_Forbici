let vinte_user = 0
let vinte_computer = 0
let set_vintiuser = 0
let set_vintipc = 0



function sceltaComputer() {
    let casualNumber = Math.floor(Math.random() * 3)
    let scelte = ["Sasso", "Carta", "Forbici"]
    computer = scelte[casualNumber]

    let computer_s = document.querySelector("#computerScelta")
    computer_s.innerHTML = computer

}

function sceltaUtente(scelta) {
    utente = scelta
    thewinneris()
}


function thewinneris() {
    sceltaComputer()
    let vincitore = 0
    if (computer === utente) {
        vincitore = 'Nessuno'
    } else if (computer === 'Carta' && utente === 'Sasso') {
        vincitore = 'Computer'
        vinte_computer++
    } else if (computer === 'Carta' && utente === 'Forbici') {
        vincitore = 'Utente'
        vinte_user++
    } else if (computer === 'Sasso' && utente === 'Forbici') {
        vincitore = 'Computer'
        vinte_computer++
    } else if (computer === 'Sasso' && utente === 'Carta') {
        vincitore = 'Utente'
        vinte_user++
    } else if (computer === 'Forbici' && utente === 'Forbici') {
        vincitore = 'Computer'
        vinte_computer++
    } else {
        vincitore = 'Utente'
        vinte_user++
    }
    let win_game = document.querySelector("#winnergame")
    win_game.innerHTML = vincitore

    if (vinte_user === 6) {
        vinte_user = 0
        vinte_computer = 0
        set_vintiuser++
        let set_userwin = document.querySelector("#set_user")
        set_userwin.innerHTML = set_vintiuser
    } else if (vinte_computer === 6) {
        vinte_user = 0
        vinte_computer = 0
        set_vintipc++
        let set_userwin = document.querySelector("#set_computer")
        set_userwin.innerHTML = set_vintipc
    }

    if (set_vintiuser == 3) {
        set_vintiuser = 0
        set_vintipc = 0
        let win = document.querySelector("#winneris")
        win.innerHTML = "Ha vinto l'USER"
    } else if (set_vintipc == 3) {
        set_vintipc = 0
        set_vintiuser = 0
        let win = document.querySelector("#winneris")
        win.innerHTML = "Ha vinto il COMPUTER"
    }

    let win_computer = document.querySelector("#partite_computer")
    win_computer.innerHTML = vinte_computer

    let win_user = document.querySelector("#partite_user")
    win_user.innerHTML = vinte_user
}