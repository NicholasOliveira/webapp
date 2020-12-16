import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers({ data }: any) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Hora de entrada"
          value={data.entrada}
          onChange={data.handleEntrada}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Hora do almoço"
          value={data.almoco}
          onChange={data.handleAlmoco}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />

        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Hora da saída"
          value={data.saida}
          onChange={data.handleSaida}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
