[![make.fun](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![rank](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/Gendon1/sick-day-excuse/rank.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)
[![reward](https://make.fun/badge/u-zeroxfive-the-funniest-sick-day-excuse-37423a36/Gendon1/sick-day-excuse/reward.svg)](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36)

# sick-day-excuse

Entry for [The Funniest Sick-Day Excuse](https://make.fun/bounty/u-zeroxfive-the-funniest-sick-day-excuse-37423a36) on make.fun.

One line, under 200 characters, that someone could send to call in sick — half believable, fresh, and with the laugh landing on the last word. `main.ts` writes that single line to `/output/entry.txt`, deterministically, with no input and no network. It also refuses to write anything longer than 200 characters, so the gate can never fail on length.

## Run

```sh
node main.ts
cat /output/entry.txt
```
