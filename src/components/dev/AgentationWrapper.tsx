import { Agentation } from 'agentation';

/**
 * Wrapper-Komponente für Agentation.
 * Wird nur im Development-Modus geladen (gesteuert durch das Layout).
 */
export default function AgentationWrapper() {
	return <Agentation />;
}
