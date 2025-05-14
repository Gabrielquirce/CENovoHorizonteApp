import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(82,10,10,1)",
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)',
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    marginBottom: 30,
  },
  thankYouText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20,
  },
  subText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  developersSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  devContainer: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 8,
  },
  devName: {
    color: '#902121',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  devLink: {
    color: 'black',
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  linkedin: {
    color: '#0A66C2',
  },
  voltarPagPrincipal: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 100,
    textAlign: "center"
  },
});