import { connect } from 'react-redux';
import App from '../components/App';
import {
  addAction,
  subAction
} from '../actions/counterActions';
import { healthAction } from '../actions/healthActions';
import { 
  warningOpenAction,
  warningCloseAction
} from '../actions/warningActions';
import {
  metaMaskAccountAction,
  metaMaskNetworkAction
} from '../actions/metaMaskActions';

const  mapStateToProps = (state) => ({
  isFetching: state.isFetching,
  count: state.count,
  error: state.error,
  health: state.health,
  simpleToken: state.simpleToken,
  warning: state.warning,
  metaMask: state.metaMask
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleAdd: (num) => {
      dispatch(addAction(num));
    },
    handleSub: (num) => {
      dispatch(subAction(num));
    },
    handleHealth: () => {
      dispatch(healthAction());
    },
    handleWarningOpen: (message) => {
      dispatch(warningOpenAction(message));
    },
    handleWarningClose: () => {
      dispatch(warningCloseAction());
    },
    handleMetaMaskAccount: (account) => {
      dispatch(metaMaskAccountAction(account));
    },
    handleMetaMaskNetwork: (network) => {
      dispatch(metaMaskNetworkAction(network));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);