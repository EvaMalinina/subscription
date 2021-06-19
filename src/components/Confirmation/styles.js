const styles = ((theme) => ({
  wrapper: {
    minWidth: '300px',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    margin: '0 auto',
  },
  title: {
    fontSize: 14,
    marginBottom: '15px'
  },
  subtitle: {
    fontSize: 12,
    marginBottom: '10px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  btn: {
    margin: '0 auto',
  },
  error: {
    color: 'red',
  }
}));

export default styles;
