//styles.js

import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header2: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  geeksText: {
    color: 'green',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  quoteIcon: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  quoteText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#555',
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  copyButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 30,
  },
  copyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  newQuoteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default styles;
