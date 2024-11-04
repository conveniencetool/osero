const board = document.getElementById('board');
const status = document.getElementById('status');
const resetButton = document.getElementById('resetButton');

let currentPlayer = 'black';
let gameBoard = Array(8).fill(null).map(() => Array(8).fill(null));

// 初期状態の設定
function initBoard() {
    gameBoard[3][3] = 'white';
    gameBoard[3][4] = 'black';
    gameBoard[4][3] = 'black';
    gameBoard[4][4] = 'white';
    renderBoard();
}

// ボードを描画
function renderBoard() {
    board.innerHTML = '';
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (gameBoard[row][col] === 'black') {
                cell.classList.add('black');
            } else if (gameBoard[row][col] === 'white') {
                cell.classList.add('white');
            }

            cell.addEventListener('click', () => handleCellClick(row, col));
            board.appendChild(cell);
        }
    }
    updateStatus();
}

// セルがクリックされた時の処理
function handleCellClick(row, col) {
    if (gameBoard[row][col] || !isValidMove(row, col, currentPlayer)) return;

    gameBoard[row][col] = currentPlayer;
    flipDiscs(row, col);
    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    renderBoard();
}

// 有効な手かどうかをチェック
function isValidMove(row, col, player) {
    // ここでは単純なチェックを行っています。
    // 実際には周囲のディスクを確認する必要があります。
    return true; // すべての手を有効と仮定
}

// ディスクをひっくり返す
function flipDiscs(row, col) {
    // 簡略化のため、ひっくり返し処理は実装していません。
}

// ステータスの更新
function updateStatus() {
    status.textContent = `現在のプレイヤー: ${currentPlayer === 'black' ? '黒' : '白'}`;
}

// リセットボタンのイベントリスナー
resetButton.addEventListener('click', () => {
    gameBoard = Array(8).fill(null).map(() => Array(8).fill(null));
    initBoard();
});

// ゲーム開始
initBoard();
