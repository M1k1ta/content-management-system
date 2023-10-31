import { lazy, Suspense  } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Tab } from './types/tab';
import tabsFromServer from './data/tabs.json';
import { Loader } from './components/Loader';

const tabs: Tab[] = tabsFromServer.sort((prevTab, nextTab) => prevTab.order - nextTab.order);

const App = () =>  (
  <>
    <Header tabs={tabs} />

    <Routes>
      {tabs.map(({ id, path }) => {
        const Component = lazy(() => import(`${__dirname}/${path}`));

        return (
          <Route
            key={id}
            path={`/${id}`}
            element={
              <Suspense fallback={<Loader />}>
                <Component />
              </Suspense>
            }
          />
        );
      })}
      
      <Route path='/' element={<Navigate to={`/${tabs[0].id}`} replace />} />
    </Routes>
  </>
);

export default App;
