import { processCommand } from './../process';

describe('Process Command', () => {
  test('logs error on bad filePath', async () => {
    const logErrorSpy = jest.spyOn(console, 'error');
    await processCommand.parseAsync([
      'tscli',
      'process',
      'bad_path/css_example.json',
    ]);

    expect(logErrorSpy).toBeCalledWith(
      expect.stringMatching(/File read failed/)
    );
  });

  test('logs entries with example file', async () => {
    const logSpy = jest.spyOn(console, 'log');
    await processCommand.parseAsync([
      'tscli',
      'process',
      'public/css_example.json',
    ]);

    expect(logSpy).toBeCalledTimes(3);
    expect(logSpy).toBeCalledWith(expect.stringMatching(/Entry/));
  });
});
