import {StyleSheet} from 'react-native';

export const stylesDark = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '10%',
    backgroundColor: '#363b81',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    shadowColor: '#fbd743',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  pressModo: {
    backgroundColor: 'rgba(251,215,67, 0.6)',
    borderRadius: 100,
    width: '30%',
    height: '50%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  pressModoIndicator: {
    width: '60%',
    height: '100%',
    backgroundColor: '#fbd743',
    borderRadius: 100,
  },
  modoTexto: {
    color: '#fbd743',
    fontSize: 15,
    fontWeight: '500',
  },
  headingCloseText: {
    color: '#ff1f1f',
    fontWeight: '500',
    fontSize: 18,
  },
  pokeList: {
    width: '100%',
    height: '90%',
    backgroundColor: 'rgba(54,59,129, 0.9)',
  },
  titulo: {
    color: '#ff1f1f',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#363b81',
    borderWidth: 1,
    borderColor: '#ff1f1f',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  cardName: {
    color: '#fbd743',
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
