// Filename: styles/globalStyles.js
import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  // General container styles
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Background consistent with the prototype
    justifyContent: 'flex-start',
  },

  // Header styles
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#3A6BD8', // Blue background for the header
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    padding: 10,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  // Image styles
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },

  // Search inputs container
  searchContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  // Style for inputs
  input: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 30,
    width: '95%',
  },
  infoTextCenter: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginVertical: 20,
  },
  imageContainer: {
    backgroundColor: '#FFFFFF', // Background color to match the prototype
    paddingHorizontal: 1,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: '#3498db', // Same as the logout button color for consistency
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '60%', // Adjust width as needed
    alignSelf: 'flex-start', // To position on the left
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  // Card styles for ResultScreen
  resultCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '95%',
    alignSelf: 'center',
  },
  resultInfoLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  resultInfoText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },

  // Footer styles
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    backgroundColor: '#FFFFFF', // Footer background should match the prototype
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerItem: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#7f8c8d',
  },

  // Logout Button Style
  logoutButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    
  },
  logoutText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  // Additional styles for other pages/components
  titleContainer: {
    backgroundColor: '#3A6BD8',
    alignItems: 'center',
    paddingVertical: 30,
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  homeTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3A6BD8',
    marginBottom: 20,
    textAlign: 'center',
  },
  homeImage: {
    width: '100%',
    height: undefined,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  homeButton: {
    backgroundColor: '#3A6BD8',
    paddingVertical: 15,
    borderRadius: 5,
    width: width > 800 ? '30%' : '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeLinkButton: {
    width: '80%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#27ae60', // Verde pentru bordură
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  homeLinkText: {
    color: '#2ecc71',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Signup and Login screen styles
  authContainer: {
    flex: 1,
    backgroundColor: '#3A6BD8',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 70,
    textAlign: 'center',
  },
  authInput: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    width: '100%',
  },
  authButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  authLinkText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 180,
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'transparent',
  },

  // Password Reset screen styles
  passwordResetContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 20,
  },
  passwordResetTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    width: '100%',
  },
  passwordResetSubtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
    marginBottom: 20,
    width: '100%',
  },
  passwordResetInput: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  passwordResetButton: {
    backgroundColor: '#2ecc71',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  passwordResetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  passwordResetCancelButton: {
    marginTop: 10,
  },
  passwordResetCancelButtonText: {
    color: '#000',
    fontSize: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#3A6BD8', // Albastru pentru header
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  passwordResetTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  passwordResetSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  passwordResetInput: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
  },
  submitButton: {
    width: '100%',
    padding: 12,
    backgroundColor: '#27ae60', // Verde pentru butonul SUBMIT
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    width: '100%',
    padding: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  cancelButtonText: {
    color: '#555',
    fontSize: 16,
  },
  // Additional and common styles
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 50,
  },
  resultLinkText: {
    color: '#3498db',
    textDecorationLine: 'underline',
    fontSize: 14,
    marginBottom: 10,
  },
  whiteText: {
    color: '#fff',
  },
  greenText: {
    color: '#2ecc71',
  },
  grayText: {
    color: '#7f8c8d',
  },
  deleteText: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Common button styles
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  greenButton: {
    backgroundColor: '#2ecc71',
    paddingVertical: 12,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },

  // Miscellaneous styles
  infoSection: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  faqItem: {
    marginBottom: 20,
  },
  faqQuestion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  faqAnswer: {
    fontSize: 16,
    color: '#666',
  },
  contactButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileLogoutButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  linkButton: {
    borderColor: '#2ecc71',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  loginLinkContainer: {
    marginTop: 250,
    marginBottom: 10,
  },
  signupLink: {
    marginBottom: 40,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
  },
  searchContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },
  searchTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#3A6BD8',
    paddingVertical: 20,
    width: '100%',
  },
  searchImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  savedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  savedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  placeholder: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888',
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#3A6BD8',
    
  },
  profileHeader: {
    backgroundColor: '#3A6BD8',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileInfoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileInfoText: {
    fontSize: 18,
    color: '#fff',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 10,
  },
  profileEditButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  helpContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  helpTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  collapsibleHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  collapsibleContent: {
    marginTop: 6,
    marginLeft: 24,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
  parallaxContainer: {
    flex: 1,
  },
  parallaxHeader: {
    height: 250,
    overflow: 'hidden',
  },
  parallaxContent: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 16,
    overflow: 'hidden',
  },
});
