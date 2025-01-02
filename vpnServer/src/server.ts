import express, { Request, Response } from 'express';
import cors from 'cors';
import { exec } from 'child_process';

const app = express();
const PORT = 3000;

// Пример маршрута
app.post('/api/run-command', (req: Request, res: Response) => {
  res.json({ message: 'Command executed successfully!' });
const {command}= req.body
exec(command, (error, stdout, stderr) => {
    res.json({ output: stdout });
}    
)
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});