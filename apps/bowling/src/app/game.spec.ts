import { Game } from './game';

describe('Game', () => {
  // Game it should create an instance
  it('should create an instance', () => {
    expect(new Game()).toBeTruthy();
  });
  // 第一個紅燈
  test('gutter game', () => {
    const game = new Game();
    for (let i = 0; i < 20; i++) {
      // 呼叫 roll method，但尚未有 roll 這個 method，所以要宣告
      game.roll(0);
    }
    // 呼叫 score method，所以也要宣告
    expect(game.score).toBe(0);
  });
});
